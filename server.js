var http = require('http');
var express= require('express');
var app= express();
var server=http.Server(app);
var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/About',function(req,res){
  res.sendFile(__dirname+'/About.html');
});

app.get('/form',function(req,res){
  res.sendFile(__dirname+'/form.html');
});

var article= [];
app.post('/article/create',function(req,res)
{
    console.log(req.body);
    if(!req.body.title)
    {
        return res.status(400).json({error:"ADD A TITLE NOOB"});
    }
    
    else if(!req.body.content)
    {
        return res.status(400).json({error:"ADD CONTENT NOOB"});
    }
    article.push(req.body);
    return res.status('200').json({message:"TA_DA"});
});

app.get('/article/list',function(req, res) {
    return res.status(200).json({articles: article});
})

  article.push({title: "Test Article 1", content:"Content 1"});
  article.push({title: "Test Article 2", content:"Content 2"});
  app.get('/article/:articleID', function(request, response) {
      response.render('../article.ejs',{
        article: article[request.params.articleID]
      })
  });

server.listen(process.env.PORT || 3000, process.env.IP|| 'localhost', function(){
     console.log('Server running');
 });

//   var server = http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
    
//     fs.readFile('index.html',function(err,data)
//     {
//       if(err){
//           return console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB FILE READ ERROR");
//       }  
//       res.end(data);
//     });
    
//     //res.end("Hello World\n");
//   });
//   server.listen(process.env.PORT || 3000, process.env.IP|| 'localhost', function(){
//     console.log('Server running');




