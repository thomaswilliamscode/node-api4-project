const db = require('../../data/database')

module.exports = {
	get,
	getById,
	// insert,
	update,
	// remove
}

// function onEach(id) {
// 	const user = db.forEach( (obj) => {
// 		return obj.find(id)
// 	})
// 	return user
// }

function get() {
	return db
}

function getById (id) {
	const user = db.find((obj) => {
		if(obj.id === id) {
			console.log(obj)
			return obj
		} 
	});
	if (user) {
		console.log(`this is user: ${JSON.stringify(user, null, 2)}`)
	}
}

function update(id) {

}