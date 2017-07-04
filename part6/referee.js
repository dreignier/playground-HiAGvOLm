let fs = require('fs'),
    job = require('./code');

let success = true,
    content = fs.readFileSync('./code.js'),
    thenRegExp = /\.[ \t\n\r]*then[ \t\n\r]*\(/,
    catchRegExp = /\.[ \t\n\r]*catch[ \t\n\r]*\(/;

if (thenRegExp.test(content)) {
    console.error('Your code still contains a call to the `then` promises method');
    success = false;
}

if (catchRegExp.test(content)) {
    console.error('Your code still contains a call to the `catch` promises method');
    success = false;
}

test();

async function test() {
    await test1();
    await test2();
    await test3();

    console.log('TECHIO> success', success);
}

async function test1() {
    console.log('Test 1: test with id 42. Response must be "David"');

    let result = Promise.resolve(42);

    let database = {
        get: function(id) {
            if (id !== 42) {
                throw 'id must be 42 but it is ' + id;
            }

            return {
                name: 'David'
            };
        }
    }

    let errorManager = {
        notify: function() {
            throw 'errorManager must not be called in this case';
        }
    }

    try {
        let name = await job(result, database, errorManager);

        if (name !== 'David') {
            throw 'Response must be "David" but it is ' + name;
        }
    } catch (error) {
        console.error('Test 1: Error during', error);
        success = false;
    }
}

async function test2() {
    console.log('Test 2: result promise will throw an error');

    let result = Promise.reject('Access denied');

    let database = {
        get: function() {
            throw 'database must not be called in this case';
        }
    };

    let errorManagerCalled = false;

    let errorManager = {
        notify: function() {
            errorManagerCalled = true;
        }
    }

    try {
        let name = await job(result, database, errorManager);

        console.error('Test 2: You must return a rejected promise');
        sucess = false;
    } catch (error) {
        if (error !== 'Access denied') {
            console.error('Test 2: Error must be "Access denied" but it is', error);
            success = false;
        }

        if (!errorManagerCalled) {
            console.error('Test 2: You must notify the error manager');
            success = false;
        }
    }
}

async function test3() {
    console.log('Test 3: database will throw an error');

    let result = Promise.reject(42);

    let database = {
        get: function() {
            throw 'Database corrupted';
        }
    };

    let errorManagerCalled = false;

    let errorManager = {
        notify: function() {
            errorManagerCalled = true;
        }
    }

    try {
        let name = await job(result, database, errorManager);

        console.error('Test 3: You must return a rejected promise');
        sucess = false;
    } catch (error) {
        if (error !== 'Database corrupted') {
            console.error('Test 3: Error must be "Database corrupted" but it is', error);
            success = false;
        }

        if (!errorManagerCalled) {
            console.error('Test 3: You must notify the error manager');
            success = false;
        }
    }
}