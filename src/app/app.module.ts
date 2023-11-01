import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { MenuLoginComponent } from './component/menu-login/menu-login.component';

import { MenuImgsComponent } from './component/menu-imgs/menu-imgs.component';
import { MenuDescriptionComponent } from './component/menu-description/menu-description.component';
import { MenuFooterComponent } from './component/menu-footer/menu-footer.component';
import { ContentComponent } from './pages/content/content.component';
import { SenhaComponent } from './pages/senha/senha.component';
import { NewContaComponent } from './pages/new-conta/new-conta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,

    MenuBarComponent,
    HomeComponent,
    MenuTitleComponent,
    MenuLoginComponent,
    MenuImgsComponent,
    MenuDescriptionComponent,
    MenuFooterComponent,
    ContentComponent,
    SenhaComponent,
    NewContaComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
