import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { UserProfileComponent } from './components/account/user-profile/user-profile.component';
import { AddressBookComponent } from './components/account/address-book/address-book.component';
import { RecentOrdersComponent } from './components/account/recent-orders/recent-orders.component';
import { AddressBookEditComponent } from './components/account/address-book/address-book-edit/address-book-edit.component';
import { UserCoverComponent } from './components/account/user-profile/user-cover/user-cover.component';
import { UserImageComponent } from './components/account/user-profile/user-cover/user-image/user-image.component';
import { UserInfoComponent } from './components/account/user-profile/user-info/user-info.component';
import { UserSocialLinkComponent } from './components/account/user-profile/user-social-link/user-social-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    AccountComponent,
    UserProfileComponent,
    AddressBookComponent,
    RecentOrdersComponent,
    AddressBookEditComponent,
    UserCoverComponent,
    UserImageComponent,
    UserInfoComponent,
    UserSocialLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
