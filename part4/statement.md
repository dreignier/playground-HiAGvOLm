# `await` can be only used in an `async` function

You can't use `await` outside of an `async` function. The code will just crash. When you are coding in a NodeJS environment, that's mean that you can't use `await` in the body directly, you have to use a function:

@[Use a main function]({"stubs":["code1.js"], "command":"node code1.js", "project":"part4"})

# Unhandled error

In NodeJS 8+, an unhandled error will trigger a warning. But the warning says that later, it will be a crash. You can have this warning with the following code:

@[Unhandled error]({"stubs":["code2.js"], "command":"node code2.js", "project":"part4"})