import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User3 } from '../module3/User3';

@Injectable({
  providedIn: 'root'
})
export class User3Service {

  private url = "https://jsonplaceholder.typicode.com/users?id=3"

  constructor(private httpClient: HttpClient) {}

  getUsers3(): Observable<User3[]> {

    return this.httpClient.get<User3[]>(this.url)
  }
}
