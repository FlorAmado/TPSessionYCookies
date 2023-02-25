
const {check}=require('express-validator')


module.exports=[

    check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isAlpha('es-ES').withMessage('solo caracteres alfabeticos'),
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato incorrecto'),
    check('color')
        .notEmpty().withMessage('Elige un color'),
    check('number')
        .isNumeric().withMessage('Solo caracteres numericos'),
    
        
]