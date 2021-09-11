const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/login', {
        message:req.query.message
    })
})

//TODO:login credentials



module.exports = router;