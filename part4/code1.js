async job() {
    return 'test';
}

async main() {
    console.log(await job());
}

// Don't forget to call your main
main();