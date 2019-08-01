---
templateKey: blog-post
title: 'Anchor tags vs Link components in React: Pick the right option by answering one simple question'
date: 2019-04-15T06:00:00.000Z
description: ''
published: true
tags:
  - Coding
  - JavaScript
  - React
---

I came across a question on the ReactJS reddit forum today, where someone new to React asked a question similar to one I remember having when I was starting out:

> Should I convert all my anchor tags to Link components?

When writing React code and needing to link to a new URL, there are a couple options that probably come to mind:

```js
	// a normal-looking, HTML-style a tag:
	<a href="https://www.example.com">Click Here!</a>

	// some kind of Link component, provided by React/Reach Router, Gatsby, etc
	<Link to="/example">Click Here!</Link>
```

So how do you know which one to use? Answer this one question:

> Am I linking to somewhere outside my app, or to somewhere internal?

1. If linking to an external page that is not a part of your React application, use an `a` tag link.
2. If linking to a different URL within your app, use the `<Link>` component. This will (depending on the routing library you’re using) still ultimately render a semantically valid `a` tag, but doesn’t refresh the page and gives you additional prop options that can be super handy (check your routing library’s docs for details).

That’s it! Happy linking!

## Corrections? Comments?

What was helpful? What did I get wrong? Let me know on Twitter! [@markadamfoster](https://www.twitter.com/markadamfoster)
