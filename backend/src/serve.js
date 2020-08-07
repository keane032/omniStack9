const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// 1:19

mongoose.set('useFindAndModify', false);

var mongoDB_URI = '';
mongoose.connect(mongoDB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).catch(err => console.log(err));

var db = mongoose.connection;

db.on('connected',()=>{
    console.log('Mongoose Connected to '+mongoDB_URI);
});
db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to '+mongoDB_URI);
});
db.on('error',(err)=>{
    console.log('Mongoose Error: '+err);
});

// app.get('/',(req,res) => {
//     return res.json({menssage:"hello world"});
// })

// app.post('/user',(req,res) => {
//     return res.json(req.body);
// })

// app.post('/user',(req,res) => {
//     return res.json({menssage:"hello world"});
// })

// app.get('/user',(req,res) => {
//     return res.json({menssage:req.query.idade});
// })

// app.put('/user/:id',(req,res) => {
//     return res.json({menssage:req.params.id});
// })

// "moongo"

app.listen(3333);