function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Job done');
            resolve('Hello world');
        }, 500);
    });
}

async function main() {
    let message1 = await job(),
        message2 = await job(),
        message3 = await job();

    console.log(message1);
    console.log(message2);
    console.log(message3);
}

main();