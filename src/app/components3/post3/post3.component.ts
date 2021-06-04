import {Component, Input, OnInit} from '@angular/core';
import { Post3 } from 'src/app/module3/Post3';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.css']
})
export class Post3Component implements OnInit {

  @Input()
  post3!: Post3;

  constructor() { }

  ngOnInit(): void {
  }

}
