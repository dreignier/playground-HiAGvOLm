function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Job done');
            resolve('Hello world');
        }, 500);
    });
}

async function main() {
    let messages = await Promises.all([job(), job(), job()]);

    messages.forEach(function(message) {
        console.log(message);
    });
}

main();