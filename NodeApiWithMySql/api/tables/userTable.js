const db = require('../../DB/database');

const creatUserTableQuery = `CREATE TABLE IF NOT EXISTS userTable (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(20) NOT NULL,
    username varchar(20) NOT NULL,
    email varchar(25) NOT NULL,
    password varchar(20) NOT NULL,
    isLoggedIn bool NOT NULL,
    UNIQUE KEY (username, email)
)`

db.query(creatUserTableQuery, (err, data) => {
    console.log(1);
    err ? console.log(err) : console.log(data);
})