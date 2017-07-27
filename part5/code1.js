const start = Date.now();
function timeLog(text) {
    console.log(`${Date.now() - start}ms - ${text}`);
}

function job() {
    return new Promise(function(resolve, reject) {
        timeLog('Job start');
        setTimeout(function() {
            timeLog('Job done');
            resolve('Hello world');
        }, 500);
    });
}

async function main() {
    let message1 = await job(),
        message2 = await job(),
        message3 = await job();

    timeLog(message1);
    timeLog(message2);
    timeLog(message3);
}

main();
