const db = require('../../data/database')

module.exports = {
	get,
	getById,
	insert,
	update,
	remove
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
			return obj
		} 
	});
	return user
}

function update(id, data) {
	let user = getById(id)
	let index = db.indexOf(user)
	let newData = [data]
	newData[0].id = id
	let updatedUser = rearange(newData)
	db[index] = updatedUser[0]
	return db[index]
}

function insert(data){
	const length = db.length;
	let newUser = [data]
	let id = length + 1
	let answer = checkId(id)
	while(answer[0] !== undefined) {
		id++
		answer = checkId(id)
	}
	newUser[0].id = (id).toString()
	newUser = rearange(newUser)
	db.push(newUser[0])
	return db[length]
}

function rearange(newUser) {
	return  newUser.map( (obj) => {
		const { id, username, password, bio} = obj
		return {id, username, password, bio}
	})
}

function remove(id){
	let user = getById(id);
	let index = db.indexOf(user);
	db.splice(index, 1)
}

// first check if anyone has same id as the length
// if so, increase id by 1 and check again
function checkId(id) {
	console.log('in the check id')
	return db.filter( (obj) => {
		if(obj.id == id) {
			return obj
		}
	})
}