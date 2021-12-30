import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityService } from './city/city.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    CityAddComponent,
    CityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
