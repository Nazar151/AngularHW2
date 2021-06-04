import {Component, Input, OnInit} from '@angular/core';
import { Post2 } from 'src/app/module2/Post2';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {

  @Input()
  post2! : Post2;
  constructor() { }

  ngOnInit(): void {
  }

}
