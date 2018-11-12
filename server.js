var http = require('http');
var fs = require('fs');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    fs.readFile('index.html',function(err,data)
    {
      if(err){
          return console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB FILE READ ERROR");
      }  
      res.end(data);
    });
    
    //res.end("Hello World\n");
  });
  server.listen(process.env.PORT || 3000, process.env.IP|| 'localhost', function(){
    console.log('Server running');
  });
