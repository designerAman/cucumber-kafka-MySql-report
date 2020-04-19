module.exports = (app) => {
    const userControllers = require('../controllers/userControllers');
    const startingRoute = '/user/api/';

    app.route(startingRoute)
        .get(userControllers.testApi);
    
    app.route(`${startingRoute}addUser`)
        .post(userControllers.addUser);

    app.route(`${startingRoute}getUser`)
        .get(userControllers.getUser);

    app.route(`${startingRoute}updateUser/:id`)
        .put(userControllers.updateUser);

    app.route(`${startingRoute}deleteUser/:id`)
        .delete(userControllers.deleteUser);
}