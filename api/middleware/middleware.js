const User = require('../users/users-model')

function logger(req, res, next) {
	const timeStamp = new Date().toDateString()
	console.log(timeStamp)
	console.log(`You made a ${req.method} request to URL: ${req.url}`)
	next()
}



// validateUserId
function validateUserId(req, res, next){
	const id = req.params.id
	let user = User.getById(id)
	if(user){
		req.user = user
		next()
	} else {
		res.status(404).json({message: `User with Id: ${id} not found`})
	}
}

// validate user body 
function validateUserBody( req, res, next ){
	const { username, password, bio } = req.body
	if (username && password && bio) {
		if (username.trim() && password.trim() && bio.trim()) {
			next();
		}
	} else {
		res
			.status(404)
			.json({ message: 'username, password, and bio must be included. ' });
	}
	
}
	

module.exports = { logger, validateUserId, validateUserBody, }