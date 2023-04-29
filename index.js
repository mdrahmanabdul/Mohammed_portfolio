const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine','ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home")
});

app.get("/about",function(req,res){
    res.render("about")
});

app.get("/blogs",function(req,res){
    res.render("blogs");
});

app.get("/projects",function(req,res){
    res.render("projects");
});



const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log(`Server is listening on port ${port}`);
});