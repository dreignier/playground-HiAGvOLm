function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(reject, 500, 'Error happened');
    });
}

async function test() {
    try {
        let message = await job();
        console.log(message);

        return 'Hello world';
    } catch (error) {
        console.error(error);

        return 'Error happened during test';
    }
}

test().then(function(message) {
    console.log(message);
});