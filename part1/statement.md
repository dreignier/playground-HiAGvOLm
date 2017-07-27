Before starting this playground, you must know how promises work in JavaScript. If you want to learn this, you can use the playground [JavaScript promises, mastering the asynchronous](https://tech.io/playgrounds/347/JavaScript-promises-mastering-the-asynchronous).

# Environment

In this playground, we'll talk about two new JavaScript keywords: `async` and `await`. Keep in mind that these keywords are not supported in every JavaScript environment. When you want to know if a JavaScript feature is supported by a browser, use [http://caniuse.com](http://caniuse.com/#feat=async-functions). As you can see, the `async` and `await` keywords are supported by a majority of up-to-date browsers. But of course, Internet Explorer does not support them. Since `async` and `await` are keywords, we can't really use a polyfill to fix that. But if you want to target an old browser and you want to code with the `async` and `await` keywords, you should use the [Babel compiler](https://babeljs.io/).

In this playground, we run the code in a NodeJS 8+ environment. So `async` and `await` are natively supported.
