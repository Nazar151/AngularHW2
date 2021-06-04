import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { Users2Component } from './components2/users2/users2.component';
import { Posts2Component } from './components2/posts2/posts2.component';
import { User2Component } from './components2/user2/user2.component';
import { Post2Component } from './components2/post2/post2.component';
import { Users3Component } from './components3/users3/users3.component';
import { User3Component } from './components3/user3/user3.component';
import { Posts3Component } from './components3/posts3/posts3.component';
import { Post3Component } from './components3/post3/post3.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    Users2Component,
    Posts2Component,
    User2Component,
    Post2Component,
    Users3Component,
    User3Component,
    Posts3Component,
    Post3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
