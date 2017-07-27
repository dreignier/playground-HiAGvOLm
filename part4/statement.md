# `await` can only be used in an `async` function

You can't use `await` outside of an `async` function. The code will just crash if you try. When you are coding in a NodeJS environment, that means that you can't use `await` in the body directly. You have to use a function like this:

@[Use a main function]({"stubs":["code1.js"], "command":"node code1.js", "project":"part4"})

# Unhandled error

In NodeJS 8+, an unhandled error will trigger a warning. But the warning says that in later versions, it will be changed to a crash. You can see this warning with the following code:

@[Unhandled error]({"stubs":["code2.js"], "command":"node code2.js", "project":"part4"})