Before starting this playground, you must know how promises in javascript works. If you want to learn it, you can use the playground [JavaScript promises, mastering the asynchronous](https://tech.io/playgrounds/347/javascript-promises-mastering-the-asynchronou)

# Environment

In this playground, we'll talk about the two new keywords of javascript: `async` and `await`. Keep in mind that this keywords are not supported in every javascript environment. When you want yo know it a javascript feature is supported by a browser, use [http://caniuse.com](http://caniuse.com/#feat=async-functions). As you can see, `async` and `await` keywords are supported by a majority of up-to-date browsers. But of course, Internet Explorer does not support it. Since `async` and `await` are keywords, we can't really use a polyfill to fix that. But if you want to target an old browser and you want to code with `async` and `await` keywords, you should something like [Babel compiler](https://babeljs.io/).

In this playground, we run the codes in a NodeJS 7+ environment. So `async` and `await` are natively supported.