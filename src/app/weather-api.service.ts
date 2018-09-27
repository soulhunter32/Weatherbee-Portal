import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { Board } from './model/board.model';
import { Location } from './model/location.model';
import { ErrorResponse } from './model/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  API_URL  =  'https://shielded-depths-15416.herokuapp.com/boards';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  board : Board;

  constructor(private  httpClient:  HttpClient) {}

  getLocations(username:string): Observable<Board | ErrorResponse>{
      return this.httpClient.get<Board>(`${this.API_URL}/${username}`).map(res => res).pipe(
      tap((board: Board) => 
      {
        if(board != undefined){
          console.log(`found board id ` + board.id + ` with ` + board.locations.length + ` locations`)
        }
      }   
    ),
      catchError(this.handleError<ErrorResponse>('getLocations'))
    );
  }

  addLocation(username: string, locationName: string): Observable<Location | ErrorResponse>{
    console.log(`${this.API_URL}/${username}/${locationName}`);
    return this.httpClient.post<Location>(`${this.API_URL}/${username}/${locationName}`, null, this.httpOptions).pipe(
      tap((location: Location) => console.log(`added location with id=${location.id}`)),
      catchError(this.handleError<ErrorResponse>('addLocation')));
  }

  deleteLocation(username: string, locationId: number){
    return this.httpClient.delete(`${this.API_URL}/${username}/${locationId}`, this.httpOptions)
    .map(res => res);
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

