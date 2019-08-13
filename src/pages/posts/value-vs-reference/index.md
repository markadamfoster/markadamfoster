---
templateKey: blog-post
title: 'JS Basics: Value vs. Reference'
date: 2019-08-13T06:00:00.000Z
description: ''
published: true
tags:
  - Coding
  - JavaScript
  - JS Basics
---

In JavaScript, a variable can point to a value, or to a *reference* to a value. It’s easiest to explain with code:

```js
let name1 = "Mark";
let name2 = name1;
name2 = "John";

console.log(name1); // Mark
console.log(name2); // John
```

No surprises here. Lines 1 & 2 set both variables to “Mark”, but then `name2` is reassigned to “John”:

![Simple Values](01-simple-values.jpg)

Easy peasy.

Here’s where things get interesting:

```js
let person1 = {
	name: "Mark",
	job: "developer"
}

let person2 = person1;
person2.name = "John";

console.log(person1); // { name: 'John', job: 'developer' }
console.log(person2); // { name: 'John', job: 'developer' }
```

Whoa! We changed person2’s name… but we never changed person1’s name. How did both of them get switched from “Mark” to “John”?

## Values vs References
When we declare a variable and set it to a primitive type value (think string or number), JavaScript treats it in the way we’d expect. You can safely think of the variable as *containing* that value.

With arrays and objects, it’s different. When you assign an array or object to a variable, it is assigned a *reference* to that array. 

So what does that mean? It means in the code above, when we declared `let person2 = person1`, there was *not* a new copy of `person1` created in memory. Instead, JavaScript points both `person1` and `person2` to the same object in memory. Both variables refer to the same object.

Here’s a visual model that helps demonstrate the concept:

(Graphic here)

As you can see, `person` and `person2` are both pointing to the same object in memory. 

Here’s what happens when we update a property on that object:

## Practical Takeaways
This concept is why you’ll often hear the advice to be very careful when mutating data. It’s easy to update an object or array in one part of your code, and not realize other variables are referencing the same, newly mutated data. 

In fact, a best practice is to *not* mutate data at all, and instead do your manipulations on a *copy* of the data, leaving the original intact.

## Want more?
 [https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) 


## Corrections? Comments?

What was helpful? What did I get wrong? Let me know on Twitter! [@markadamfoster](https://www.twitter.com/markadamfoster)
