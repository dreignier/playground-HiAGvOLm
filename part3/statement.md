As you should already know, a promise can be rejected. So you should ask yourself: How do we deal with a rejected promise when using `async` and `await` ?
If you remember the [playground on promises](https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronous), you learned this:

>  You can use the promise's `catch` like a normal `catch`. And everything is simple to understand. Keep in mind that a `then` callback can crash. It can throw an error (with an explicit throw or by trying to access a property of a `null` variable). The `catch` method will also catch these crashes. Repeat to yourself: the promise's `catch` method is like a normal `catch`.

So, what is the most natural way to handle an error when using `async` and `await` ? Yes, you have it. Use a simple `try { ... } catch (error) { ... }`. Look at the following example:

@[Error handling example]({"stubs":["code1.js"], "command":"node code1.js", "project":"part3"})

If you want to return a rejected promise in an `async` function, you just have to throw an error. Look at this example:

@[Return a rejected promise]({"stubs":["code2.js"], "command":"node code2.js", "project":"part3"})