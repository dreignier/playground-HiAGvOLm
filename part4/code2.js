async function job() {
    throw new Error('error');
}

job(); // The promise returned by the job function is in error but no one handle it