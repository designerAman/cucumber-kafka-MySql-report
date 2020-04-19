const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aman@123'
});

connection.connect((err) => {
    err ? console.log(err) : (
        console.log('Connected with MySql Server'),
        connection.query(`CREATE DATABASE IF NOT EXISTS Test`, (err) => {
            err ? console.log(err) : console.log('Database Created Successfully ');
        }),
        connection.query('USE Test', (err) => {
            err ? console.log(err) : (
                console.log('Using Test database'),
                require('../api/tables/userTable')
            )
        })
    )
})

module.exports = connection;