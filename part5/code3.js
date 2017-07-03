function job() {
    return 'Hello world';
}

async function main() {
    let message = await job();

    console.log('message');
};

main();