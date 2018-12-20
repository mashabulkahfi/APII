//var faker = require("faker");
var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progif'
})

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser =bodyParser.urlencoded({extended: false});


connection.connect(function(err){
  if(err) throw err;
  console.log('connected to DB');
});

app.get('/pengiriman/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT JNEREG, JNEOKE, WAHANA, TIKIREG, JT, SICEPAT FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/jnereg/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT JNEREG FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/jneoke/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT JNEOKE FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/wahana/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT WAHANA FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/tikireg/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT TIKIREG FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/jt/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT JT FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

app.get('/pengiriman/sicepat/:idkec',urlencodedParser, function(req, res){
  var id = req.params.idkec;

  connection.query('SELECT SICEPAT FROM gw WHERE kecamatan_id=?', id, function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows[0]);
  })
});

 module.exports = app;
// app.get("/user", function (req, res) {
//   var data = ({
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     username: faker.internet.userName(),
//     email: faker.internet.email()
//   });
//   res.status(200).send(data);
// });

// app.listen(3000, function(){
//   console.log('listen to port 3000');
// });

// app.get("/users/:num", function (req, res) {
//   var users = [];
//   var num = req.params.num;

//   if (isFinite(num) && num  > 0 ) {
//     for (i = 0; i <= num-1; i++) {
//       users.push({
//           firstName: faker.name.firstName(),
//           lastName: faker.name.lastName(),
//           username: faker.internet.userName(),
//           email: faker.internet.email()
//        });
//     }

//     res.status(200).send(users);
   
//   } else {
//     res.status(400).send({ message: 'invalid number supplied' });
//   }

// });

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works wey'
//     });
// });



