const mongoose = require('mongoose');
const schema = mongoose.Schema;

let product_schema = new schema({
	name : {type: String, required: true, max: 100},
	reg_no: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Details', product_schema);