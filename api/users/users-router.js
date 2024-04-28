const express = require('express')
const Middle = require('../middleware/middleware')
const User = require('../users/users-model')

const router = express.Router()

// get users
router.get( '/', async (req, res) => {
	let users = await User.get()
	res.status(200).json(users)
})

// get by user id
router.get('/:id', Middle.validateUserId, (req, res) => {
	res.status(200).json(req.user)
});

// update user 

// add new user 

// delete user 

router.use( (err, req, res, next) => {
	res.status( err.status || 500).json({
		customMessage: 'something tragic happend inside the user router',
		message: err.message,
		stack: err.stack,
	})
})

module.exports = router