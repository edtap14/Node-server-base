const mongoose = require('mongoose');

const dbConection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CNN);
		console.log('base dev datos online');
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConection;
