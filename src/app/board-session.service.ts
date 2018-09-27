import { Injectable } from '@angular/core';
import { Board } from './model/board.model';
import { User } from './model/user.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Location } from './model/location.model';

@Injectable({
  providedIn: 'root'
})
export class BoardSessionService {

  constructor(private storage:LocalStorageService) { }

  updateUser(user: User){
    this.storage.store('user', JSON.stringify(user));
  }

  updateBoard(board: Board){
    this.storage.store('board', JSON.stringify(board));
  }

  addLocation(location: Location){
    let board = this.board;
    board.locations.push(location);
    this.storage.store('board', JSON.stringify(board));
  }

  deleteLocation(locationId: number){
    let board = this.board;
    board.locations = board.locations.filter(item => item.id !== locationId);
    this.storage.store('board', JSON.stringify(board));
  }

  get user(): User{
    return new User(JSON.parse(this.storage.retrieve('user')));
  }

  get board(): Board{
    return new Board(JSON.parse(this.storage.retrieve('board')));
  }
}
