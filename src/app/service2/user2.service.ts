import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User2 } from '../module2/User2';

@Injectable({
  providedIn: 'root'
})
export class User2Service {
private url = "https://jsonplaceholder.typicode.com/users?id=2"
  constructor(private httpClient : HttpClient) { }
  getUsers2() : Observable<User2[]>{
  return this.httpClient.get<User2[]>(this.url)
  }
}
