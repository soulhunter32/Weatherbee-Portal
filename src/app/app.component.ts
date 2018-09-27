import { Component } from '@angular/core';
import { BoardSessionService } from './board-session.service';
/* import { StompService } from '../../node_modules/@stomp/ng2-stompjs'; */
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weatherbee Portal';
  private stompClient;
  
  constructor(private sessionService: BoardSessionService/* , private stompService: StompService */) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    //this.connect();
  // Subscribe to notification topic
  /* this.stompService.subscribe('/weather-updates', boardUpdates => {
      console.log("Pinging queue...");
    // Update notifications attribute with the recent messsage sent from the server
            console.log(JSON.parse(boardUpdates.body));
        });
  }

  sendMessage(message){
    this.stompClient.send("/weatherbee/send/messages" , {}, message);
  } */
  }
  changeUser(){
    this.session.updateUser(null);
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/socket');
    this.stompClient = Stomp.over(socket);
 
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
 
      _this.stompClient.subscribe('/weather-updates', function (hello) {

      });
    });
  }
 
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
 
    console.log('Disconnected!');
  }

  get session(){
    return this.sessionService;
  }
}
