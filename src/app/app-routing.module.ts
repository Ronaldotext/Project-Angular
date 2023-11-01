import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {ContentComponent} from './pages/content/content.component'
import {SenhaComponent} from'./pages/senha/senha.component'
import {NewContaComponent} from'./pages/new-conta/new-conta.component'
import {DashboardComponent} from './pages/dashboard/dashboard.component'
const routes: Routes = [
  {path:'',component:HomeComponent},

  {
  path:'content/:id',
  component:ContentComponent}
  ,
  {
  path:'recove/password',
  component:SenhaComponent
},
{
  path:'new/account',
  component:NewContaComponent
},
{
  path:'dashboard',
  component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
