const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/routes');
const bodyparser = require('body-parser');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(routes);


app.listen(PORT, ()=> {
    console.log(PORT + " is Listening");
})