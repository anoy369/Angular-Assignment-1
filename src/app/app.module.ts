import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/core/login/login.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { RegisterComponent } from './components/core/register/register.component';
import { AccountComponent } from './components/pages/account/account.component';
import { UserProfileComponent } from './components/pages/account/user-profile/user-profile.component';
import { AddressBookComponent } from './components/pages/account/address-book/address-book.component';
import { RecentOrdersComponent } from './components/pages/account/recent-orders/recent-orders.component';
import { AddressBookEditComponent } from './components/pages/account/address-book/address-book-edit/address-book-edit.component';
import { UserCoverComponent } from './components/pages/account/user-profile/user-cover/user-cover.component';
import { UserImageComponent } from './components/pages/account/user-profile/user-cover/user-image/user-image.component';
import { UserInfoComponent } from './components/pages/account/user-profile/user-info/user-info.component';
import { UserSocialLinkComponent } from './components/pages/account/user-profile/user-social-link/user-social-link.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HomeBannerComponent } from './components/pages/home-page/home-banner/home-banner.component';

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
    UserSocialLinkComponent,
    HomePageComponent,
    HomeBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
