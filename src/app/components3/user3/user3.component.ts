import {Component, Input, OnInit} from '@angular/core';
import { User3 } from 'src/app/module3/User3';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {

  @Input()
  user3!: User3;

  constructor() { }

  ngOnInit(): void {
  }

}
