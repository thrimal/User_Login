import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import {LoginComponent} from "./components/share/login/login.component";
import {SignUpComponent} from "./components/share/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
