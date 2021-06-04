import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Post } from '../module/Post';

@Injectable({
  providedIn: 'root'
})
export class Post1Service {

  private url = "https://jsonplaceholder.typicode.com/posts?userId=1"

  constructor(private httpClient : HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url)
  }
}
