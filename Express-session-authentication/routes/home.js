const express = require('express');
const { routeToLogin } = require('../middlewares/middleware');
const userDetails = require('../middlewares/userDetails');
const router = express.Router();



router.get('/', userDetails,routeToLogin, (req, res,next) => {
    //  console.log({isshome:req.user})
    // console.log(res.locals)
    const users = res.locals.user
    //console.log(users)
    res.render('./pages/home', {
        user : users[0].surname
    })
})

router.use(function (req, res) {
    res.status(405).json({
        error: {
            message: "not defined route"
        }
    })
})

module.exports = router;