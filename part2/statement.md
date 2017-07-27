Take a look at the following code and run it.

@[Asynchronous code using await and async]({"stubs":["code.js"], "command":"node code.js", "project":"part2"})

Let's examine what is going on here:

The `async` keyword at line 7 means that the function `test` will always return a promise. Even if the function just executes a simple `return 'Hello world'`. It will be converted to a promise no matter what. That's why we can use a `then` at line 14 to print the message.

The `await` keyword at line 8 means that the code execution will stop until the promise returned by `job()` is resolved. And the return value from `test()` is stored in the `message` variable.

And that's all. It's very simple to understand `async` and `await` when you already know how promises work. If you have a hard time understanding this, we can rewrite the `test` function in plain promise style:

```javascript
function test() {
    return job().then(function(message) {
        console.log(message);

        return 'Hello world 2';
    });
}
```