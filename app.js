const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("ship_builder", {})
})

app.post("/", function(req,res){
    //const shipParts = req.body.ship;
    console.log(req.body);
})

app.get('/battle', function(req,res){
    res.render("ship_battle", {})
})

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})