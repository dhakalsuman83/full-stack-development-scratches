const express = require('express');
const db = require('../database');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/login', {
        message:req.query.message
    })
})

//login credentials
router.post('/', (req, res) => {
    //console.log({isslogin:res.locals.users})
    const { email, password } = req.body;
    //console.log(password)
    
    //TODO: Validation

    //trimming email as we have stored the trimmed email in the database
    const emailTrim = email.toLowerCase().trim();
    //checking if the user exists in the system
    db.oneOrNone('SELECT * FROM users WHERE email = $1', [emailTrim])
        .then(data => {
           // console.log(data)
            if (!data) {
                res.redirect('/register?message=Email%20is%20not%20registered')
            } else {
                // console.log(data.password)
                // console.log(password)

                //passwordcheck
                bcrypt.compare(password, data.password)
                    .then(result => {
                       // console.log(result)
                        if (!result) {
                            res.redirect('/login?message=Email%20or%20password%20does%20not%20match')
                        } else {
                            req.session.userId = data.user_id
                            res.redirect('/')
                        }
                    })
                    .catch (err => {
                        console.error(err)
                    })
            }
        })
        .catch(err => {
        console.error(err)
    })
    
})



module.exports = router;