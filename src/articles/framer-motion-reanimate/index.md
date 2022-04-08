---
templateKey: blog-post
title: 'How to re-animate a Framer Motion component based on state'
date: 2022-04-8T06:00:00.000Z
description: ''
published: true
tags:
  - Coding
  - Framer Motion
---

A common question when getting started with Framer Motion is how to force a component to re-animate. I ran into this question on the Framer Discord the other day, and I remember having the same question when I was starting out:

> “How can I make a component be animated on re-render? (I’m changing its state)”  

This is a situation you’ll run into pretty early with Framer Motion. 

It's straightforward to learn how to animate the *entrance* of a component. But what if you want to force that animation to run again? For instance, often we want an animation to re-run any time a user takes an action to update a specific piece of state.

For this type of situation, we'll leverage the `key` prop on a motion component. This is our way of signalling to Framer Motion: "Hey! I want you to re-run that entrance animation even though the element is already on the page."

> TLDR: If you pass in a `key` prop to a motion component, it will re-animate whenever that key value updates.

## Let’s take a look at an example

Say we have this lovely motion div:

```jsx
<motion.div
	initial={{ y: -30, opacity: 0 }}
	animate={{ y: 0, opacity: 1, background: color }}
/>
```

When the component is first mounted, we’ll get a nice entrance animation and see the div slide down and fade in. 

But we want the animation to run again whenever the color variable changes. 

It’s easy to think this will happen automatically, but it won’t. When the `color` variable updates, the component re-renders, and framer-motion will automatically animate the `backgroundColor` between values. But the `y` and `opacity` animations will not re-run.

To communicate to framer-motion that we want those animations to re-run whenever `color` changes, we add a `key` prop and pass in whatever value we want re-animations to be tied to (in this case, `color`):

```jsx{2}
<motion.div
	key={color}
	initial={{ y: -30, opacity: 0 }}
	animate={{ y: 0, opacity: 1, background: color }}
/>
```

The key prop is how we tell framer-motion to re-animate our component, outside the usual events of a component mounting and unmounting.


I hope that helps! Here’s a CodeSandbox example to play around with this concept yourself... try removing the key prop and see what happens! [https://codesandbox.io/s/framer-motion-animate-on-render-74rvfi](https://codesandbox.io/s/framer-motion-animate-on-render-74rvfi)

