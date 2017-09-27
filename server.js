const mongo = require('mongodb').MongoClient;
const express = require('express');
const path = require('path');
const app = express();// Initializing express
const io = require('socket.io').listen(process.env.PORT || 8000).sockets;

//Edit for ng Build Where all routes will come to
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

mongo.connect('mongodb://localhost:27017/angular-chatApp', function(err, db) {
    if(err) {
        throw err;
    }
    console.log('Mongodb connected...');

    //connect to socket.io
    io.on('connection', function(){
        let chat = db.collection('chats');

        // Create function to send status
        sendStatus = function(x){
            socket.emit('status', x);
        }

        //Get chats from mongo collection
        chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }

            //Emit messages
            socket.emit('output', res);
        });

        //Handle input events
        socket.on('input', function(data){
            let name = data.name;
            let message = data.message;

            //check name and message
            if(name == '' || message == ''){
                sendStatus('Insert a name and message');
            } else {
                //insert message
                chat.insert({name: name, message: message}, function(){
                    io.emit('output', [data]);

                    //Send status object
                    sendStatus({
                        message: 'Sent',
                        clear: true
                    })
                });
            }
        });
    });
});