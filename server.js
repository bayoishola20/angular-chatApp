const mongo = require('mongodb').MongoClient;
const express = require('express');
const path = require('path');
const app = express();// Initializing express
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const port = process.env.PORT || 8888;

// using server as opposed to app references socketio
server.listen(port, () => {
    console.log('Server started on ' + port);
});

//Mongo connect
mongo.connect('mongodb://localhost:27017/angular-chatApp', function(err, db) {
    if(err) {
        throw err;
    }
    console.log('Mongodb connected...');

    //connect to socket.io
    io.on('connection', function(socket){
        let chat = db.collection('chats');

        // Create function to send status
        sendStatus = function(x){
            socket.emit('status', x);
        }

        //Get chats from mongo collection and set limit
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
                    });
                });
            }
        });

        //Handle clear
        socket.on('clear', function(data){
            chat.remove({}, function(){
                socket.emit('cleared');
            });
        });
    });
});


// Index route: Found in public folder
// app.get('/', (req, res) => {
//     res.send("Invalid Endpoint...");
// });

//Static folder
//Set static folder as public
app.use(express.static(path.join(__dirname, 'public')));

//Edit for ng Build Where all routes will come to
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

users = [];
connections = [];

//Socket server connection and testing
io.on('connection', (socket)=>{
    connections.push(socket)
    console.log('Connected: %s socket(s) connected...', connections.length);

    //Messages
    socket.on('send-message', (data) => {
        console.log(data.text);
        io.emit('message-received', data);
    });

/*    socket.on('event1', (data) => {
        msg: 'Client to server, are you listening...'
    });

    socket.emit('event2', {
          msg: 'Yes, it works for me!!!'
    });

    socket.on('event3', (data) => {
        console.log(data.msg);
        socket.emit('event4', {
            msg: 'Roger that. Loud and clear'
        });
    }); */

    // Disconnect
    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s socket(s) connected...', connections.length);
    });   

});