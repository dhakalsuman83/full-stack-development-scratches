const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('./pages/login')
})


router.get('/register', (req, res) => {
    res.render('./pages/register')
})


router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];


    //Validation --check required fields

    if (!name || !email || !password || !password2) {
        errors.push({msg: 'please fill in all the fields'})
    }

    //check password match 
    if (password != password2) {
        errors.push({msg:'password donot match'})
    }

    //check pass length
    if (password.length < 6) {
        errors.push({msg: 'password should be atleast 6 characters'})
    }

    if (errors.length > 0) {
        res.render('./pages/register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        res.send('pass')
    }
})

module.exports = router;