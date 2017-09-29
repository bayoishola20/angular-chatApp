import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'; //library defined in server.jss

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  socket: io.Socket
  
  constructor() {
    this.socket = io.connect();
   }

  ngOnInit() {
    this.socket.emit('event1', {
      msg: 'Client to server, are you listening...'
    });
    this.socket.on('event2', (data: any) => {
      console.log(data.msg);
      this.socket.emit('event3', {
        msg: 'Yes, it works for me!!!'
      });
    });
    this.socket.on('event4', (data:any) => {
      console.log(data.msg);
    });
  }

}
