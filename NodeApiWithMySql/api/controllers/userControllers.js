const userDb = require('../../DB/database');

exports.testApi = (req, res, next) => {
    res.json({
        message : 'Welcome to the API with Node and MySql'
    })
};

exports.addUser = (req, res, next) => {
    const name = req.body.name;
    if(!name){
        res.status(400).json({
            error : 'name field is required'
        })
        return 0;
    }

    const username = req.body.username;
    if(!username){
        res.status(400).json({
            error : 'username field is required'
        })
        return 0;
    }

    const email = req.body.email;
    if(!email){
        res.status(400).json({
            error : 'email field is required'
        })
        return 0;
    }

    const password = req.body.password;
    if(!password){
        res.status(400).json({
            error : 'password field is required'
        })
        return 0;
    }

    const addUserQuery = `
        INSERT INTO userTable (
            name,
            username, 
            email, 
            password,
            isLoggedIn
        ) values(
            '${name}',
            '${username}',
            '${email}',
            '${password}',
            false
        )
    `
    userDb.query(addUserQuery, (err, data) => {
        if(err) {
            console.log(err.sqlMessage);
            res.status(400).json({
                error : err.sqlMessage
            });
        } else {
            console.log(JSON.stringify({
                name,
                username, 
                email, 
                password,
            }));
            res.json({
                data : {
                    name,
                    username, 
                    email, 
                    password,
                }
            })
        }
    });
}

exports.getUser = (req, res, next) => {
    // console.log(req.query);
    const getAllUserQuery = req.query.id ? `SELECT * FROM userTable WHERE id = ${req.query.id};`: `SELECT * FROM userTable`;
    
    userDb.query(getAllUserQuery, (err, data) => {
        if(err) {
            res.status(400).json({
                err
            });
        } else {
            if(data.length >0 ) {
                res.status(200).json({
                    data
                })
            } else {
                if (req.query.id) {
                    res.status(400).json({
                        error : `no user for id ${req.query.id}`
                    });
                } else {
                    res.status(400).json({
                        error : `no user exist in the database`
                    });
                }
            }
        }
    })
}

exports.updateUser = (req, res, next) => {
    console.log(req.body.name);
    if(!req.body.name) {
        res.status(400).json({
            error : 'Please provide name for update'
        });
        return 0;
    }

    let idForUpdateData = req.params.id;
    console.log(idForUpdateData);
    if(!idForUpdateData) {
        res.status(400).json({
            error: 'Please provide the user id to whom you want to update name'
        });
        return 0;
    }

    updateUserQuery = `
        UPDATE userTable SET name = '${req.body.name}' WHERE id = ${idForUpdateData};
    `

    userDb.query(updateUserQuery, (err, data) => {
        if(err) {
            res.status(400).json({
                err
            });
        }else {
            console.log();
            if(data.message.split('matched:')[1].split(' ')[1] > 0) {
                res.json({
                    message : 'User Updated successfully'
                });
            } else {
                res.status(404).json({
                    error: 'User not found'
                })
            }
            
        }
    })

}

exports.deleteUser = (req, res, next) => {
    console.log(req.params.id);
    if(!req.params.id) {
        res.status(400).json({
            error : 'Please provide user Id to delete'
        });
    }

    deleteUserQuery = `
        DELETE FROM userTable WHERE id=${req.params.id};
    `

    userDb.query(deleteUserQuery, (err, data) => {
        if(err) {
            res.status(400).json({
                err
            });
        } else {
            if(data.affectedRows > 0) {
                res.json({
                    message : 'User delete Successfully'
                });
            } else {
                res.status(404).json({
                    error: 'User not found'
                })
            }
        }
    })
}
