import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import{RouterModule,Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TweetComponent } from './tweet/tweet.component';
const appRoutes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"tweet",component:TweetComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
