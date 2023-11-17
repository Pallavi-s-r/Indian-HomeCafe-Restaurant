const express = require('express');
const router = express.Router();

const bookingCntrl = require('../Controller/BookingController');
const userCntrl = require('../Controller/UserController');
const verify = require('../Middleware/middleware.js');

//test api
router.get('/test', function(req,res){
    res.send("working")
});

router.post('/booking' , verify.verifyToken ,bookingCntrl.booking);
router.get('/record' , bookingCntrl.getRecord);

router.post('/register' , userCntrl.register);
router.post('/login' , userCntrl.login);


module.exports = router;

