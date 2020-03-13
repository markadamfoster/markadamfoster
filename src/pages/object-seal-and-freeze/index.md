---
templateKey: blog-post
title: 'Object.seal() and Object.freeze()'
date: 2020-03-13T06:00:00.000Z
description: ''
published: true
tags:
  - Coding
  - JavaScript
  - JS Basics
---

![Ice on lake](./frozen.jpg)

The other day I saw Object.freeze() and Object.seal() on a list of common JavaScript interview topics, and took note as I’ve never really looked into them before.

## General background

As their names imply, both of these methods have to do with controlling if and how changes can be made to an object. This is particularly useful with functional programming, data immutability, and limiting side effects.

## Object.seal()

You seal an object by passing it into the `Object.seal` method, like this:

```js
Object.seal(myObject)
```

Once an object is sealed, you can update existing values, but deleting and adding new properties does not work:

- ✅ updating properties still works
- ❌ deleting properties does NOT work
- ❌ adding new properties does NOT work

Let’s prove it with code!

```js
const user1 = {
  firstName: “Mark”,
  lastName: "Foster”
};

Object.seal(user1); // 🛡 SEAL IT!

user1.firstName = “Ignatius”; // ✅ updating existing values still works
delete user1.lastName; // ❌ deleting properties does NOT work
user1.email = “ted@example.com”; // ❌ adding new properties does NOT work

console.log(user1); // { firstName: ‘Ignatius’, lastName: ‘Foster’ }
```

## Object.freeze()

You freeze an object by passing it into the `Object.freeze` method, like this:

```js
Object.freeze(myObject)
```

Once an object has been frozen, you can no longer update, add, or delete properties:

- ❌ updating properties does NOT work
- ❌ deleting properties does NOT work
- ❌ adding new properties does NOT work

Take a look:

```js
const user1 = {
  firstName: “Mark”,
  lastName: "Foster”
};

Object.freeze(user1); // 🥶 FREEZE IT!

user1.firstName = “Ignatius”; // ❌ updating values does NOT work
delete user1.lastName; // ❌ deleting properties does NOT work
user1.email = “ted@example.com”; // ❌ adding new properties does NOT work

console.log(user1); // { firstName: ‘Mark’, lastName: ‘Foster’ }

```

That’s the basics! Quick and simple ways to protect an object from accidental changes.

## Corrections? Comments?

What was helpful? What did I get wrong? Let me know on Twitter! [@markadamfoster](https://www.twitter.com/markadamfoster)
