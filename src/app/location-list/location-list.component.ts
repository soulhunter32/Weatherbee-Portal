import { Component, OnInit, Input } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { Board } from '../model/board.model';
import { BoardSessionService } from '../board-session.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private weatherApiService: WeatherApiService, private sessionService: BoardSessionService) { }

  ngOnInit() {
    this.session.updateBoard(null);
    this.getLocationsList(this.session.user);
  }

  public getLocationsList(user: User){
    console.log("asdasdasd");
    this.weatherApiService.getLocations(user.username).subscribe((data: Board) =>{
      console.log(data);
      this.session.updateBoard(new Board(data));
    })
  }

  public deleteLocation(locationId:number){
    console.log("Deleting location with ID "  + locationId)
    this.weatherApiService.deleteLocation(this.session.user.username, locationId).subscribe(result => {
      console.log(`deleted location with id=${locationId}`);
      this.session.deleteLocation(locationId);
    });
  }

  get session(){
    return this.sessionService;
  }
}
