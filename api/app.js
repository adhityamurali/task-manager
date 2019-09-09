const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

//load mongoose models
const{List,Task} = require('./db/models');

app.use(bodyParser.json());
//load middle ware

/* Route hanfdlers */

/* list routes */


app.get('/lists',(req,res)=>{
    
List.find({}).then((lists)=>{
    res.send(lists)
})

})

app.post('/lists',(req,res)=>{
    
let title = req.body.title

let newList = new List({
    title
});
newList.save().then((listDoc)=>{
    res.send(listDoc);
})

});

app.patch('/lists/:id',(req,res)=>{

})

app.delete('/lists/:id',(req,res)=>{

})

app.listen(3000,()=>{
    console.log("listening on 3000")
})