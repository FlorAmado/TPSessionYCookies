const {validationResult} = require('express-validator')
const {readJSON,writeJSON} = require('../data')
module.exports = {
    
    login : (req,res) => {
        return res.render('users/login',{
            title : "Inicio de sesión"
        })
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);
        

        if(errors.isEmpty()){
            
            req.session.fondo = {
    
            name : req.body.name,
            email : req.body.email,
            number : req.body.number,
            color : req.body.color,
            
        };
            console.log(req.session);
            return res.redirect('login')
        }else{
            return res.render('users/login',{
                title : "Inicio de sesión",
                errors : errors.mapped()
            })
        }
    },
    profile : (req,res) => {
        return res.render('users/profile',{
            title : "Perfil de usuario"
        })
    }
    
}