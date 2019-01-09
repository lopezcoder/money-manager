const environment = process.env.NODE_ENVIRONMENT || 'develop'

const develop = {
    environment: {
        name: 'develop',
        port: 3000,
    },
    dbms: {
        host: 'localhost',
        password: '',
        dbname: 'developDB'
    }
};

const test = {
    environment: {
        name: 'test',
        port: 3000,
    },
    dbms: {
        host: 'localhost',
        password: '',
        dbname: 'testDB',
        dbport: '27017'
    }
};

const config = {
    develop,
    test
}

module.exports = config[environment];

