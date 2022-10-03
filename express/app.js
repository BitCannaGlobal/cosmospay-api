const express = require('express')
const bodyParser = require("body-parser")
var path = require('path')
const fs = require('fs')
var getJSON = require('get-json')
const cors = require('cors');
const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

//const githubRepo = 'https://raw.githubusercontent.com/atmoner/chains-api/main/cosmos.config.json'
const githubRepo = 'https://raw.githubusercontent.com/BitCannaGlobal/cosmospay-api/main/cosmos.config.json'

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  getJSON(githubRepo, function(error, response){
    res.send(response)
  })
})
 
app.listen(5000, function () {
	console.log('***********************************************')
	console.log('* App listening on port ' + 5000)
	console.log('**********************************************')
})
