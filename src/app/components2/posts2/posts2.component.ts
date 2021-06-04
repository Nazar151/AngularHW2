import { Component, OnInit } from '@angular/core';
import { Post2 } from 'src/app/module2/Post2';
import {Post2Service} from "../../service2/post2.service";

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.css']
})
export class Posts2Component implements OnInit {

posts2 : Post2[] = [];

  constructor(private post2Service : Post2Service) { }

  ngOnInit(): void {
    this.post2Service.getPosts2().subscribe(value => {
      this.posts2 = value
      console.log(value);
    })
  }

}
