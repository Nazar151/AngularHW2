import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from 'src/app/module/User';
import {User1Service} from "../../service/user1.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = []

  constructor(private user1Service : User1Service) { }

  ngOnInit(): void {
    this.user1Service.getUsers().subscribe(value => {
      this.users = value
      console.log(value);
    })

  }

}
