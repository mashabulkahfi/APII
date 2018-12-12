var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progif'
})

// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// var urlencodedParser =bodyParser.urlencoded({extended: false});

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

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works wey'
//     });
// });

module.exports = app;
