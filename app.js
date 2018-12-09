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

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works wey'
//     });
// });

module.exports = app;
