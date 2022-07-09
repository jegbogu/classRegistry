// if(process.env.NODE_ENV !=="production"){
//     require('dotenv').config();
// }
 
const express = require('express');
const app = express();
const path = require('path');
const flash= require('connect-flash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const registrationSchema = require('./model/registrationSchema');
const createNSchema = require('./model/createNSchema');
const registration = require('./routes/registration');

const username= encodeURIComponent("joseph");
const password=encodeURIComponent("4blwF0rsZyvHsk2n");
const databasename=encodeURIComponent("classregapp");


const dbLink=`mongodb+srv://${username}:${password}@cluster0.f0xopc3.mongodb.net/${databasename}`;

// mongoose.connect('mongodb:/localhost/ClassRegApp').then(res=>{console.log("mongodb is connected")},err=>console.log(err))

 

main().catch(err=>console.log(err));

async function main(){
    mongoose.connect(dbLink,{useNewUrlParser: true});
}

 

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('landing-page')
})

app.get('/create_new_classroom',(req,res)=>{
    res.render('create_new_classroom')
})

app.get('/r/home-page', async(req,res)=>{
    const data = await createNSchema.find()
    
    res.render('home-page',{data})
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.use('/',registration)
app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})



app.use('/',registration)
   

    


app.post('/login', async(req,res)=>{
   const{Email,Password}= await req.body
    const userData = await registrationSchema.findOne({Email})
    const validation = bcrypt.compare(Password,userData.Password)
     if(validation){
    res.redirect('/create_new_classroom')
     }else{
    res.redirect('/login')
    }
})
  
app.use('/:id',registration)
app.post('/createNew', async(req,res)=>{
    const{className,Section,Days,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,number_of_weeks}=  req.body
    
     await createNSchema.insertMany({className,Section,Days,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,number_of_weeks})
    
    res.render('home-page',{data})


 })

app.listen('3000',()=>{
    console.log('listening to port 3000')
})