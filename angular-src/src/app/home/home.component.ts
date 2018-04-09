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
  Username: String;
  users: Array<any>;
  selfAuthored: Boolean = false;
  avatar: String = '../../assets/img/user.png';

  constructor( private socketService: SocketService ) { }

  ngOnInit() {
    this.messages = new Array();

    this.socketService.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });

    this.users = new Array();

    this.socketService.on('get-users', (msg: any) => {
      this.users.push(msg);
      console.log(msg);
      console.log(this.users);
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

  sendUser() {
    const user = {
      user: this.Username
    };
    this.socketService.emit('new-user', user);
    this.Username = '';
  }

}
