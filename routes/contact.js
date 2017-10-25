var express = require('express');
var router = express.Router();
var nodemailer=require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'contact' });
});
router.post('/send',function(req,res,next){
    var transporter=nodemailer.createTransport({
      service:'Gmail',
      auth:{
          user:"sashasultanyan@gmail.com",
          pass:"sultan_jan"
      }
    });
var mailOptions={
from:"John Dohe<sasha.sultanyan@yahoo.com>",
    to:"sashasultanyan@gmail.com",
        subject:"Website submission",
        text:'You have a new message with following details..Name:'+req.body.name+"Email:"+req.body.email+"MEssage:"+req.body.message,
     html: "<P>You have got a news messagw from following message</P><ul><li>Name"+req.body.name+"</li><li>Email:"+req.body.email+"</li><li>Message:"+req.body.message+"</li></ul>",

};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
        res.redirect('/');
    }else{
        console.log("Message send"+info.response);
        res.redirect('/');
    }
})
});

module.exports = router;
