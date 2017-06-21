async function job() {
    return 'test';
}

async function main() {
    console.log(await job());
}

// Don't forget to call your main
main();