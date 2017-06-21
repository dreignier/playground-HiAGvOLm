async function job() {
    throw new Error("Access denied");
}

job()

.then(function(message) {
    console.log(message);
})

.catch(function(error)) {
    console.log(error);
});