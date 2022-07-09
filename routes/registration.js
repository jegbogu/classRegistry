const express = require('express')
const router = express.Router()
const registrationSchema = require('./model/registrationSchema');
const bcrypt = require('bcrypt');

router.get('/registration',(req,res)=>{
    res.render('registration')
})

router.post('/registration',async(req,res)=>{
    try {
        const{Name,Email,Password} = await req.body
       const user = await registrationSchema.findOne({Name})
      if(user){
      return res.redirect('/registration')
       }
    const hashPassword = await bcrypt.hash(Password,12)
    const userData = new registrationSchema({
        Name,
        Email,
        Password:hashPassword
    })
    await userData.save()
    res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
   

    
})

router.get('registration/:id',async (req,res)=>{
    const {id} = req.params
 console.log(id)
})
 
module.exports = router