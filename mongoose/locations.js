var mongoose = require('mongoose');
var Location = mongoose.Schema({
                                   accuracy:Number,
                                   altitude:Number,
                                   date: Date,
                                   heading: Number,
                                   latitude:Number,
                                   longitude:Number,
                                   mocked: Boolean,
                                   speed:Number,
                                   isMobile: Boolean,
                                   platform: String,
                                   version: String,
                                   device_brand: String,
                                   device_unique_id: String,
                                   device_id: String,
                                   device_country: String,
                                   device_locale: String,
                                   device_emulator: Boolean,

                                   full_address:String,
                                   full_address_id:String,

                                   administrative_area_level_4:String,
                                   administrative_area_level_4_id:String,

                                   administrative_area_level_3:String,
                                   administrative_area_level_3_id:String,

                                   administrative_area_level_2:String,
                                   administrative_area_level_2_id:String,

                                   administrative_area_level_1:String,
                                   administrative_area_level_1_id:String,

                                   street:String,
                                   country:String,
                                   country_id:String,

                                   created: {
                                       type: Date,
                                       default: Date.now
                                   }
                              });


// methods =====================
// generating a hash
module.exports = mongoose.model('Location', Location, 'locations');