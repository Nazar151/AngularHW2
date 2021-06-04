import { Component, OnInit } from '@angular/core';
import { Post3 } from 'src/app/module3/Post3';
import {Post3Service} from "../../service3/post3.service";

@Component({
  selector: 'app-posts3',
  templateUrl: './posts3.component.html',
  styleUrls: ['./posts3.component.css']
})
export class Posts3Component implements OnInit {

posts3 : Post3[] = [];

  constructor(private post3Service : Post3Service) { }

  ngOnInit(): void {
    this.post3Service.getPosts3().subscribe(value => {
      this.posts3 = value
      console.log(value);

    })
  }

}
