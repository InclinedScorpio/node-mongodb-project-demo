const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const MongoUrl =
	"mongodb+srv://ashutosh:ashu12345678@ashutosh.htqxz.mongodb.net/shop?retryWrites=true&w=majority";

let _db;

const initDb = callback => {
	if (_db) {
		callback(null, _db);
	} else {
		MongoClient.connect(MongoUrl)
			.then(client => {
				_db = client;
				return callback(null, _db);
			})
			.catch(err => {
				callback(err, null);
			});
	}
};

const getDb = () => {
	if (!_db) {
		throw Error("Database Not Initialized");
	} else {
		return _db;
	}
};

module.exports = {
	initDb,
	getDb
};
