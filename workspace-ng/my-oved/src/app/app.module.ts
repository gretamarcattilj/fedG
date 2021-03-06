import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { UserComponent } from './user/user.component';
import { PersoneComponent } from './persone/persone.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberComponent,
    UserComponent,
    PersoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
