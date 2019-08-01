---
templateKey: blog-post
title: React setState() in Depth
date: 2018-07-30T22:19:32.920Z
description: ''
published: true
tags:
  - Coding
  - React
---

I was inspired by this tweet by Kent C. Dodds to dig into React's setState a bit more:

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">Read this and you&#39;ll know more about `setState` than 90% of react developers: <a href="https://t.co/P9GTc8Hpss">https://t.co/P9GTc8Hpss</a></p>&mdash; Kent C. Dodds (@kentcdodds) <a href="https://twitter.com/kentcdodds/status/995102323939557376?ref_src=twsrc%5Etfw">May 12, 2018</a></blockquote>

Low and behold, I did indeed find quite a bit I wasn't aware of. Here's a quick breakdown:

## 1. Don't depend on setState calls being executed immediately.

This one I'd heard before: React does not promise that your call to setState will be executed immediately. They may be batched, so if you set values and immediately try to read those values, they may not be what you expect:

```javascript
this.setState({ myNumber: 1 })
console.log(this.state.myNumber) // 1

this.setState({ myNumber: 2 })
console.log(this.state.myNumber) // 2... or maybe 1!
```

## 2. Use an updater function if your update relies on current state values.

Up until now, I've always just passed in an object to setState:

```javascript
this.setState({ myValue: 10 })
```

Turns out you can also pass in what's called an **updater function**... a function that returns your update which allows us to eliminate possible surprises from batched (non-immediate) setState updates. This is especially handy if our setState call depends on the current values of `this.state`.

Here's the skeleton:

```javascript
this.setState(() => {})
```

When you pass in a function it receives two arguments by default: the current values of `this.state` and `this.props`:

```javascript
this.setState((state, props) => {})
```

Your return value is what is used to update state. Here's an example of calling setState with an updater function that wouldn't actually change anything:

```javascript
this.setState(state => {
  return state
})
```

Let's pretend we have a value in state called `myValue`. We want to do two things:

* set it to 10, and then
* increment it by a value called `incrementBy`, which has been passed down as a prop.

This is exactly where an updater function comes in handy:

```javascript
this.setState({ myValue: 10 })

// we'll use an updater function, so we can be confident
// that the setState call above has been executed.
this.setState((state, props) => {
  return {
    myValue: state.myValue + props.incrementBy,
  }
})
```

## 3. setState accepts a callback!

If you want to execute a function _after_ your setState changes have been applied, you can pass a callback as the second parameter to your setState call:

```javascript
this.setState({ myValue: 23 }, () => console.log(this.state))
```

In the callback, you can rest assured that `this.state` contains the updated values. For more on this, check out [this article](https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296) by Michael Chan.

## Conclusion

That's it! And turns out Kent was right... there is a lot to be learned from actually reading the official docs! 😄
