The following code uses promises to handle an asynchronous `result`. The `result` is a promise that yields an `id` when resolved. This `id` must be used to retrieve information from the `database`. In the end, your function must return the `name` property of the information. In case of an error, you have to return a rejected promise with the given error. But first you must notify the `errorManager` with the error.

The given code already works. You have to rewrite it to use the `async` and `await` keywords.

@[Resolve the challenge]({"stubs":["code.js"], "command":"node referee.js", "layout": "aside", "project":"part6"})