const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3000;
const route = require('./api/routes/userRoutes');
route(app);

app.listen(PORT, (err) => {
    err ? console.log(err) : (
        console.log(`Server started at ${PORT}`),
        require('./DB/database')
    )
});
