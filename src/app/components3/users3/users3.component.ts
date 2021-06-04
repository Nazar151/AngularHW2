import { Component, OnInit } from '@angular/core';
import { User3 } from 'src/app/module3/User3';
import {User3Service} from "../../service3/user3.service";

@Component({
  selector: 'app-users3',
  templateUrl: './users3.component.html',
  styleUrls: ['./users3.component.css']
})
export class Users3Component implements OnInit {

users3 : User3[] = [];

  constructor(private user3Service : User3Service) { }

  ngOnInit(): void {
    this.user3Service.getUsers3().subscribe(value => {
      this.users3 = value
      console.log(value);
    })
  }

}
