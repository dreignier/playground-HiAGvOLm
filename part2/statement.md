Take a look at the following code and run it.

@[Asynchronous code using await and async]({"stubs":["code.js"], "command":"node code.js", "project":"part2"})

Let explain what is going on here:

The `async` keyword at line 7 mean that the function `test` will always return a promise. Even if the function just do a simple `return 'Hello world';`. It will be converted to a promise no matter what. That's why we can use a `then` at line 14 to print the message.

The `await` keyword at line 8 mean that the code execution will stop until the promise returned by `job()` is revolved. And we store the result in the `message` variable.

And that's all. It's very simple to understand `async` and `await` when you already know how promises works. If you have a hard time to understand, we can rewrite the `test` function in a plain promise style:

```javascript
function test() {
    return job().then(function(message) {
        console.log(message);

        return 'Hello world 2';
    });
}
```