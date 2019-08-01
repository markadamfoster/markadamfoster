---
templateKey: blog-post
title: StyleSheet.absoluteFill (and other React Native StyleSheet helpers) 
date: 2018-09-10T22:19:32.920Z
description: ''
published: true
tags:
  - React Native
  - Coding
---

One of my dev goals for the years is leveling up my skills around creating delightful, silky smooth animations (in the web and with React Native mobile apps). I was working through one of Jason Brown's [animation tutorials](https://reactnativeanimations.com/), and saw a reference to `StyleSheet.absoluteFill`, which I hadn't seen before.

Looking into [the docs](https://facebook.github.io/react-native/docs/stylesheet) and reading a [helpful article on Medium](https://medium.com/@realasa/react-native-stylesheet-helpers-c948b542b37c), it turns out React Native's StyleSheet object gives us a few helpful methods to solve common styling needs:

## StyleSheet.absoluteFill

This causes the element to cover the entire screen, and sets the position property to "absolute". A great example of when this is often useful is a modal overlay background.

```javascript
<View style={StyleSheet.absoluteFill} />
```

## Stylesheet.absoluteFillObject

This helper allows you to use the absoluteFill shorthand, but also change a couple properties if needed:

```javascript
const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 40,
    backgroundColor: 'blue',
  },
})
```

## StyleSheet.hairlineWidth

Give your element a beautifully crisp hairline border that gracefully handles different platforms and screen pixel densities:

```javascript
const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
```

## References:

* https://medium.com/@realasa/react-native-stylesheet-helpers-c948b542b37c
* https://facebook.github.io/react-native/docs/stylesheet
