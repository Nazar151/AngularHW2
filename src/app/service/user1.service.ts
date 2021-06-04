import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../module/User';

@Injectable({
  providedIn: 'root'
})
export class User1Service {
private url = "https://jsonplaceholder.typicode.com/users?id=1"
  constructor(private httpClient : HttpClient) { }
  getUsesr() : Observable<User[]>{
 return this.httpClient.get<User[]>(this.url)
  }
}
