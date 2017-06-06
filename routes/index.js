var express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');
var geocoder = require('geocoder');
var path = require('path');
var dateFormat = require('dateformat');
var Message = require('../mongoose/messages')
var Location = require('../mongoose/locations')




const makeDate=(f)=>{
    var d = new Date(f);
    var x = dateFormat(d, 'yyyy-mm-dd HH:mm');
    return x;
};
const mapLocation = (data)=>{
    var o = {};
    data.forEach(g =>{
        g.types.forEach((s, i )=>{

            if(/administrative_area/i.test(s)){
                o[s] = g.address_components[0].long_name;
                o[s+'_id'] = g.place_id;
            }
            else if(/country/i.test(s)){
                o['country'] = g.address_components[0].long_name;
                o['country_id'] = g.place_id;
            }
            else if(/route/i.test(s)){
                o['full_address'] = g.formatted_address;
                o['full_address_id'] = g.place_id;
                var b = g.formatted_address.split(',');
                o['street'] = b[0];

            }
            else if(/postal/i.test(s)){
                o['postal_code'] = g.address_components[0].long_name;
                o['postal_code_id'] = g.place_id;
            }
        });
    });
    return o;
}



/* GET home page. */
router.get('/',(req,res,next)=>{
    res.send('Sup')
})

router.post('/messages', function(req, res, next) {
    console.log('..........')
 if(empty(req.body))
    return res.end();
  var queries = [];
  var messages = req.body.message.map(s => {
      delete s._id;
      s.date = makeDate(s.date);
      return s;
      //var event = new models.instance.Message(s);
      //var save_query = event.save({return_query: true});
      //queries.push(save_query);
  });

    Message.insertMany(messages)
        .then(s => res.json({done:true}))
        .catch(err=>console.log(err))
  //models.doBatch(queries, function(err){
  //   if(err) throw err;
  //   res.json({done:true});
  //});
});

router.post('/locations', function(req, res, next) {
    console.log('..........')
    if(empty(req.body) || empty(req.body.location))
        return res.end();
    var location = req.body.location;
    location.date = makeDate(location.date);


    //const record = (l) => {
    //    var event = new models.instance.Location(l);
    //    var save_query = event.save({return_query: true});
    //    models.doBatch(save_query, function(err){
    //        if(err) throw err;
    //        res.json({done:true});
    //    });
    //}

    geocoder.reverseGeocode(location.latitude, location.longitude,
    function ( err, data ) {
        if(data.status == 'OK'){
            var v = mapLocation(data.results);
            location = Object.assign(location, v);
        }
        var f = new Location(location);
        f.save(location).then(s => res.json({done:true}))
        //record(location);
    });


});
module.exports = router;
