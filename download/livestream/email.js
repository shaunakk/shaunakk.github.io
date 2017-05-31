var nodemailer = require("nodemailer");
var http = require('http');
var jsonfile = require('jsonfile')
var util = require('util')
var name=//Your name(String)
var gmail=//Your Gmail(String)
var password=//Your Password of your email(String)
var data
var file = '/Users/shaunak/livestream/camera/history.json'
jsonfile.readFile(file, function(err, value) {
    if(value===undefined){
        email()
        return
    }
    else{
        console.log("no")
    }
    var emailBool=value.email
    console.log(emailBool.toString())
    if(emailBool!=false){
      email()
    }
    else{
      console.log("Email is not on!")
    }
})

function email() {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: gmail,
            pass: password
        }
    });
    smtpTransport.sendMail({
        from: name, // sender address
        to: email, // comma separated list of receivers
        subject: "WARNING!", // Subject line
        text: "Motion has been detected!" // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
}
setInterval(function() {
    process.exit()
}, 10000);