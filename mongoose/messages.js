var mongoose = require('mongoose');
var Message = mongoose.Schema({
	                              thread_id:Number,
	                              address: String,
	                              date: Date,
	                              date_sent: Number,
	                              read: Number,
	                              type: Number,
	                              body: String,
	                              locked: Number,
	                              sub_id: Number,
	                              error_code: Number,
	                              creator: String,
	                              seen: Number,
	                              isMobile: Boolean,
	                              platform: String,
	                              version: String,
	                              device_brand: String,
	                              device_unique_id: String,
	                              device_id: String,
	                              device_country: String,
	                              device_locale: String,
	                              device_emulator: Boolean,
	                              created: {
		                              type: Date,
		                              default: Date.now
	                              }
                               });


// methods =====================
// generating a hash
module.exports = mongoose.model('Message', Message, 'messages');