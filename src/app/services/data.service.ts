import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string;
  

  constructor(private _http:HttpClient) {
    this.url='http://localhost:8080/flightreservation/reservations/';
   }
  public getReservation(id:number):Observable<any> 
  {
   return this._http.get(this.url+id,{responseType:'json'}).pipe(response=>response);
  }
  public checkin(checkInRequest):Observable<any> 
  {
    return this._http.post(this.url,checkInRequest ).pipe(res=>res);
  }

}