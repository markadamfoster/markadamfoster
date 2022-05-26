---
templateKey: blog-post
title: 'npx is yelling at me about global installation of Create React App, even though it’s not installed globally'
date: 2022-05-26T08:22:00.000Z
description: ''
published: true
tags:
  - Coding
  - React
---

I was trying to spin up a new create-react-app project this morning and ran into this error:

```
You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.1).

We no longer support global installation of Create React App.

Please remove any global installs with one of the following commands:
- npm uninstall -g create-react-app
- yarn global remove create-react-app

The latest instructions for creating a new app can be found here:
https://create-react-app.dev/docs/getting-started/
```

That seemed simple enough… so I ran *both* the npm and yarn uninstall commands, just to be safe 💅. However, even after running the uninstall commands I was getting the same error.

I even did a little extra digging*, but couldn’t find the create-react-app package installed on my machine anywhere.

So npx was yelling at me about a globally installed package, but that package isn’t installed globally. What gives?

## Solution
Turns out npx has a cache... and that cache can get stale.

For me, the solution was to clear it:
```
npx clear-npx-cache
```

Once I ran that, I was able to successfully run the `npx create-react-app` command.

If you get stuck with a similar error, I hope that helps! Happy coding 🧑‍💻

<div style={{height: 30 }} />

### *a little extra digging…  

Have you ever taken the time to peek under the hood and see where global packages actually get installed and what you currently have in there? Try running these commands and exploring a bit!

```
// npm
npm list -g --depth 0

// yarn
yarn global dir && yarn global list
```