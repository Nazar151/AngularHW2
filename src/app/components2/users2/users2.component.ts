import { Component, OnInit } from '@angular/core';
import {User2Service} from "../../service2/user2.service";
import {User2} from "../../module2/User2";

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {

users2 : User2[] = [];

  constructor(private user2Service : User2Service) { }

  ngOnInit(): void {
    this.user2Service.getUsers2().subscribe(value => {
      this.users2 = value
      console.log(value);
    })
  }

}
