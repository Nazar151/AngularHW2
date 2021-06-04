import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post3 } from '../module3/Post3';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Post3Service {

private url = "https://jsonplaceholder.typicode.com/posts?userId=3";

  constructor(private httpClient : HttpClient) { }

  getPosts3() : Observable<Post3[]>{

  return this.httpClient.get<Post3[]>(this.url)
  }
}
