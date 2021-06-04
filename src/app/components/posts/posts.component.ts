import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/module/Post';
import {Post1Service} from "../../service/post1.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts : Post[] = [];

  constructor(private post1Service: Post1Service) { }

  ngOnInit(): void {
    this.post1Service.getPosts().subscribe(value => {
      this.posts = value
      console.log(value);
    })
  }
}
