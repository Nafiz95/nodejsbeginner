var http = require('http');
var express= require('express');
var app= express();
var server=http.Server(app);
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/About',function(req,res){
  res.sendFile(__dirname+'/About.html');
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




