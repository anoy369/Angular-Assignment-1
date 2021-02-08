import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/core/login/login.component";
import {RegisterComponent} from "./components/core/register/register.component";
import {AccountComponent} from "./components/pages/account/account.component";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
