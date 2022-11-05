---
templateKey: blog-post
title: Using AWS Lambda to Automatically Watermark Images on S3 (Updated for 2022)
date: 2022-10-13T00:00:00.000Z
description: ''
published: true
featured: true
popular: true
icon: aws
tags:
  - Serverless
  - Coding
---

> I published the original version of this article in 2018, and it's been one of my most popular posts. This version has been fully updated for 2022. The biggest change was swapping out the deprecated `gm` image manipulation library for `sharp`, which is more performant and still actively maintained. Enjoy!

Hello friends! The other day I solved an interesting problem in an interesting way, and wanted to document the process just in case it can help anyone else.

## The Problem

For one of my side projects, I needed to generate watermarked versions of uploaded images. Users can upload images, but until the images are paid for, a watermarked version should be displayed to prevent unsanctioned use.

![Watermark sample](./lambda-watermark-example.png)

## Initial Research

The project's server runs on Node/ExpressJS. My first thought was to use an Express library and handle the watermarking on my server. Something like this:

1.  User uploads the photo to my server
2.  server creates a watermarked copy
3.  both versions of the photo get transferred to S3

I quickly realized this is suboptimal. It's a small side project, so I only have one server, which is responsible for everything backend (mostly responding to API requests). If a large number of users all uploaded photos at the same time, my server would potentially get bogged down creating all the watermarked copies and then transferring double the load up to S3.

Instead, this is the perfect task for a serverless function. That way, as many instances can be spun up instantaneously as needed, do the work, and not be sitting around uselessly the rest of the time.

So the new approach was this:

1.  User uploads a photo, which gets transferred directly to S3
2.  A serverless function (AWS Lambda) watches the S3 bucket and is automatically triggered when a new item is added
3.  The Lambda function creates a watermarked version of the image and places it in a specified folder on S3.

Much better! A virtually unlimited supply of serverless functions do the watermarking, leaving my server free to handle other tasks.

## The Solution

> A quick caveat... my specialty is frontend development, and this ain't frontend! So while this approach has worked well for me, please consider this a jumping off point that can be easily improved if needed.
>
> Also, if you're a total newb with AWS Lamba (like I was), you may need to consult some other resources to get your bearings. I started here: [AWS Serverless APIs & Apps - A Complete Introduction](https://www.udemy.com/aws-serverless-a-complete-introduction). After working through the first 3 sections I knew enough to start hacking around.

<div style={{height: 20}} />

### The Function

Before we head into the belly of the AWS Lambda beast, let's take a look at the function code we'll be using.

### Step 1: Head into the AWS Lambda console

1.  Log into (or create) an AWS account
2.  Head to the Lambda > Functions area
3.  Click the button to **Create function**

### Step 2. Function name & role

1.  Select the "Author from scratch" option
2.  Name your function something exciting
3.  Select the latest Node.js runtime option (anything v6 and above should work).
4.  For the "Role", we're going to need to create a role that has full read/write access to the S3 buckets you'll be using:

    - In a new tab, go to the **IAM** area
    - Select **Roles** (in the sidebar)
    - Click **Create Role**
    - For the "Choose the service that will use this role", select **Lambda**
    - In the policies search bar, type "S3", checkmark the (now visible) "AmazonS3FullAccess" option, and click next
    - Name your role something descriptive and exciting, and click **Create**

5.  Now that we've got our needed IAM role, back in the Lambda create function area, choose that role in the "Existing Role" select menu.
6.  Click **Create Function**

### Step 3. Initial function setup

Now the fun stuff.

1.  We need to add our trigger. For this setup, you'll scroll down and choose the **S3** trigger.
2.  Now, in the "Configure triggers" section:
    - Select your S3 bucket
    - Leave the "Event type" set to **Object Created (All)**
    - Enter a prefix or suffix if needed. For my project, I had all my images that need a watermark in a specific folder, so I used a prefix of that directory path.
    - Leave the "Enable trigger" checkbox checked, and click **Add**

### Step 4. The function code

(For brevity, I'll assume you're somewhat familiar with the basics of using npm and setting up a new Node project.)

1.  Use `npm init` (or use yarn) to create a new Node project.
2.  Run `npm i --save lambda-watermark` to add the lambda-watermark library to your project as a dependency.
3.  Create an index.js file for your function, and add the following code (this is from the lambda-watermark readme):

```javascript
'use strict'
var LambdaWatermark = require('lambda-watermark')

var options = {
  watermarkImagePath: './watermark.png',
  relativeSize: 5,
  opacity: 50,
}

exports.handler = function (event, context) {
  new LambdaWatermark(options)(event, context)
}
```

(a quick note... at this point I ended up forking the lambda-watermark library to make a few small changes... a couple stylistic changes to the watermark, some additional logging, and I set it up to use an environment variable to specify the destination bucket. These are optional and not detailed here... hit me up on Twitter if you'd like to hear more)

4.  Add your watermark image. Title it "watermark.png", or else update the `watermarkImagePath` property in index.js

5.  Create a Zip of the following files/folders:

    - index.js
    - watermark.png
    - node_modules

6.  Back on your AWS Lambda function page, in the **Code entry type**, select "Upload a .zip file", and upload the .zip file created in step 5.

### Final Steps

1.  Continuing down the AWS Lambda function page, in Basic settings section, I had to increase the Timeout value in order to get things to work consistently. I ended up going with 20 seconds, but feel free to experiment.

2.  As I mentioned above, I ended up having issues getting things to work until I altered the lambda-watermark package to accept an environment variable to specify an alternate destination bucket. If you end up doing the same you'll need to enter your variable and bucket name in the "Environment variables" section.

3.  Click save and you're good to go! Try adding images to your bucket, and use AWS CloudWatch to watch your logs to make sure its being triggered and running properly.

4.  Finally, I found it useful to set up another copy of this function which watched my dev/staging S3 bucket, which is another reason to update lambda-watermark to use an environment variable to specify the destination bucket, so you can send dev environment watermarked images to a separate bucket.

## Conclusion

Well, there's my first foray in to the world of serverless! Honestly, it was extremely rewarding. My primary love is front end development, and being able to offload concerns of scalability and server maintenance is extremely attractive.

Since this is my first try at all this, I'm sure there are massive improvements that can be made to this setup. I'd love to hear your suggestions if you have any. Or if you're trying to follow along and get stuck, please let me know! I'd be happy to try and help.
