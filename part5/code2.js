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
    let messages = await Promise.all([job(), job(), job()]);

    messages.forEach(function(message) {
        timeLog(message);
    });
}

main();
