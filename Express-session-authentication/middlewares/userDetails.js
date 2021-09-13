const db = require('../database')

const userDetails = async (req, res, next) => {
    if (req.session.userId) {
        try {
            const data = await db.any('SELECT * FROM users WHERE user_id = $1;', req.session.userId)
            res.locals.user = data
        } catch (err) {
            next(err)
        }
        //console.log({ iss: res.locals.user })
        //     .then(data => {
        //         //console.log(data)
        //         res.locals.user = data
        //         console.log({ iss: res.locals.user })
        //         return next()
        //     })
        //     .catch(err => {
        //         console.error(err)
        //         return next(err)
        // })
    }
    next()
}
module.exports = userDetails