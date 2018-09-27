import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, AfterViewChecked } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { LocationListComponent } from '../location-list/location-list.component';
import { Location } from '../model/location.model';
import { BoardSessionService } from '../board-session.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  constructor(private weatherApiService: WeatherApiService, private boardSessionService: BoardSessionService) { }

  ngOnInit(){
  }

  addLocation(locationName: string){
    this.weatherApiService.addLocation(this.boardSessionService.user.username, locationName).subscribe(
      (location: Location) => {
        if(location != undefined){
          if(this.boardSessionService.board.locations == undefined){
            this.boardSessionService.board.locations = [];
          }
          this.boardSessionService.addLocation(new Location(location));
        }
      }
    );
  }
}
