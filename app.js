const express = require('express');
//const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("landing", {});
})

/*app.get('/home', function(req,res){
    res.render('otherhome', {});
})*/
app.get('/home', function(req,res){
    res.render('index', {});
})

app.get('/professional', function(req,res){
    res.render('experience', {})
})

app.get('/about', function(req, res){
    res.render('about', {});
})

app.get("/projects", function(req,res){
    res.render("projects", {})
})

app.get("/education", function(req,res){
    res.render("education", {});
})

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})