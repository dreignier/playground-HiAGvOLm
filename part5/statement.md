# Call multiple functions with `await` in parallel

If you try this code :

@[Sequential multiple awaits]({"stubs":["code1.js"], "command":"node code1.js", "project":"part5"})

You can see that the `job` function is called sequentially. But in such a code, you want to make the 3 calls in parallel. You have to use your old friend `Promise.all`

@[Parallel multiple awaits]({"stubs":["code2.js"], "command":"node code2.js", "project":"part5"})

# You can `await` anything

You can use the `await` keyword even if the result is not a promise.

@[You can await anything]({"stubs":["code3.js"], "command":"node code3.js", "project":"part5"})