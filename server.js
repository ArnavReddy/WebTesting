var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));
app.get('/expresshtm.html', function (req, res) {
   res.sendFile( __dirname + "/" + "expresshtm.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
    fs.appendFile('mynewfile1.txt', req.query.first_name+" "+req.query.last_name+"/n", function (err) {
  if (err) throw err;
  console.log('Saved!');
});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})