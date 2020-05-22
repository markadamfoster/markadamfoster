---
templateKey: blog-post
title: 'How to Use Environment Variables with Create-React-App'
date: 2019-10-28T06:00:00.000Z
description: ''
published: true
icon: 'react'
tags:
  - Coding
  - React
---

Environment Variables are a critical tool in getting your app set up correctly, but can be tricky for beginners. Create React App also has a couple other nuances to be aware of.

For background, environment variables are how we wire things up to behave differently between different environments (i.e. development vs production). For instance, you often need your dev environment to point to a different API, or for your payments library to only charge money in production, etc.

## Setting Values

If you’re using Create-React-App, you can add your own custom environment variables.

1. create a file called `.env` in the root directory of your project
2. add a new line in the file for each variable you need, making sure to prefix the variable name with `REACT_APP_`. For instance:

```
REACT_APP_API_URL=http://api.example.com
```

> 🚨 Don't miss this! The variable name must start with `REACT_APP_` otherwise it won’t work.

3. Restart the dev server.

## Reading Values

Environment variable values can be read using `process.env.REACT_APP_VARIABLE_NAME`, like so:

```
render() {
  return (
    <div>
      Current API url: {process.env.REACT_APP_API_URL}.
    </div>
  )
}
```

## A few more things...

- Client side `.env` values _are not secret_. They can be found by anyone who wants to sift through your site’s JavaScript code.

- `.env` files _should_ be committed and tracked in version control with the rest of your project.

- You may want some environment variables that are only for you specifically (not necessarily others on your team) that you don’t want to be tracked via version control. For these, you can create another file in the project root, called `.env.local`. Variables placed here will override the `.env` value if both are present. This file should _not_ be committed or tracked in version control.

- Changes to `.env` files don’t take effect until you restart the server.

- To comment out a line in a `.env` file, prefix it with a “#” character, like so:

```
# REACT_APP_API_URL=http://api.example.com
REACT_APP_API_URL=http://api2.example.com
```

- Create-React-App comes with one default environment variable out-of-the-box: `NODE_ENV`. This will be set to “development”, “test”, or “production” depending on your current environment. It can be read from `process.env.NODE_ENV`.

For more details, check the official [Create React App docs](https://create-react-app.dev/docs/adding-custom-environment-variables/).

## Follow me on Twitter!

Want more? Did I get something wrong? [@markadamfoster](https://www.twitter.com/markadamfoster)
