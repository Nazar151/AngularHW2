import {Component, Input, OnInit} from '@angular/core';
import { User2 } from 'src/app/module2/User2';


@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  @Input()
  user2! : User2;

  constructor() { }

  ngOnInit(): void {
  }

}
