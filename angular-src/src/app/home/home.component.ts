import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // SocketIOClient works because I am using its @types
  // socket: SocketIOClient.Socket;
  messageText: String;
  messages: Array<any>;
  selfAuthored: Boolean = false;
  avatar: String = '../../assets/img/user.png';

  constructor( private socketService: SocketService ) { }

  ngOnInit() {
  /*  this.socketService.emit('event1', {
      msg: 'Client to server, are you listening...'
    });
    this.socketService.on('event2', (data: any) => {
      console.log(data.msg);
    this.socketService.emit('event3', {
        msg: 'Yes, it works for me!!!'
      });
    });
    this.socketService.on('event4', (data: any) => {
      console.log(data.msg);
    }); */

    this.messages = new Array();

    this.socketService.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });
  }

  sendMessage() {
    const message = {
      text: this.messageText,
      date: Date.now(),
      imageUrl: this.avatar
    };
    this.socketService.emit('send-message', message);
    this.messageText = '';
  }

}
