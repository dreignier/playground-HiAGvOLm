function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'Hello world 1');
    });
}

async function test() {
    let message = await job();
    console.log(message);

    return 'Hello world 2';
}

test().then(function(message) {
    console.log(message);
});