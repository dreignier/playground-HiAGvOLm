The following code use promises to handle an asynchronous `result`. `result` is a promise giving an `id` when resolved. This `id` must be used to retrieve informations in the `database`. In the end, your function must return the `name` property of the informations. In case of error, you have to return a rejected promise with the given error. But first you must notify the `errorManager` with the error. The given code already work.

You have to rewrite it to use the `async` and `await` keywords.

@[Resolve the challenge]({"stubs":["code.js"], "command":"node referee.js", "layout": "aside", "project":"part6"})