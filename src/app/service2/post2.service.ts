import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post2 } from '../module2/Post2';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Post2Service {

private url = "https://jsonplaceholder.typicode.com/posts?userId=2"

  constructor(private httpClient : HttpClient) { }

  getPosts2() : Observable<Post2[]> {

    return this.httpClient.get<Post2[]>(this.url)
  }
}
