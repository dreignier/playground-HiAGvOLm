function job(result, database, errorManager) {
    return result

    .then(function(id) {
        return database.get(id);
    })

    .then(function(info) {
        return info.name;
    })

    .catch(function(error) {
        errorManager.notify(error);
        throw error;
    });
}

module.exports = job;
