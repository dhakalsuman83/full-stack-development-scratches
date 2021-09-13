//const express = require('express');
const db = require('../database')


const routeToLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.clearCookie('mrcoffee_sid')
        res.redirect('/login')
    }else {
        next()
    }
    
}

const routeToHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/')
    }else {
        next()
    }
}

module.exports = { routeToLogin, routeToHome};