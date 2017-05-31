var http = require('http');
var fs = require('fs')
var util = require('util')
var file = '/Users/shaunak/science_fair/data.json'
var csvfile = '/Users/shaunak/science_fair/data.csv'
var arr
var obj
var str="Timestamp, Number, IP, \n"
const PORT = 9605
var ip

function handleRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    req.on('data', function(chunk) {
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            ip = req.headers['x-forwarded-for'] || 
             req.connection.remoteAddress || 
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;
            arr = JSON.parse(data)
            obj = {
                "answer": JSON.parse(chunk.toString()).number.toString(),
                "timestamp": new Date(),
                "ip": ip
            }
            arr.push(obj)

            fs = require('fs');
            fs.writeFile(file, JSON.stringify(arr), function(err) {
                if (err) return console.log(err);
            });

        
        });
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            arr = JSON.parse(data)
            for(i=0;i<arr.length;i++){
                str=str+arr[i].timestamp.toString()+", " + arr[i].answer.toString()+", " + arr[i].ip.toString()+ " \n"
            }

            fs = require('fs');
            fs.writeFile(csvfile, str, function(err) {
                if (err) return console.log(err);
            });
            
        
        });

        console.log("Received body data from: " + req.connection.remoteAddress);
        console.log(JSON.parse(chunk.toString()).number)
        


    })

    response.end("You are not authorized to come here. Please go away")
}
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);

});
