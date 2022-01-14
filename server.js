const express = require("express");
// const morgan = require("morgan");
// const helmet = require("helmet");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./models");

// require("dotenv").config();
// require('./auth/passport');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(express.json())




app.get('/',(req,res)=>{
    res.send('working')
})








db.sequelize.sync()
.then( () =>{
    app.listen(PORT, () => {
        console.log("localhost:" + PORT)
    })
});