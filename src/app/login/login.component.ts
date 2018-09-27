import { Component, OnInit } from '@angular/core';
import { BoardSessionService } from '../board-session.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username : string;

  constructor(
      private sessionService: BoardSessionService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    if(this.username == undefined){
      return;
    }
    let user = new User();
    user.username = this.username;
    this.sessionService.updateUser(user);
    this.router.navigate(['/location-list']);
  }

  get session(){
    return this.sessionService;
  }
}
