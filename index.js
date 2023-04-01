const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs')

const api = express();
api.use(bodyParser.json());
api.use(express.urlencoded({ extended: true }));
api.set('view engine', 'ejs');

api.get('/', (req, res) => {
  res.render('index');
})

api.post('/', (req,res) => {
  console.log(req.body)
  res.redirect('/sucess')
})

api.get('/sucess', (req, res) => {
  res.render('sucess');
})

api.listen(3000,async()=>{
    console.log(`http://localhost:3000`)
})