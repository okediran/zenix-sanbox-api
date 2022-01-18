const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./models");

require("dotenv").config();
require("./auth/passport")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json())

const router = require('./routes/routes');
app.use('/api', router);



db.sequelize.sync()
.then( () =>{
    app.listen(PORT, () => {
        console.log("localhost:" + PORT)
    })
});