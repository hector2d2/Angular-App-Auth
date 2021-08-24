import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-jw8fyeeo.us.auth0.com',
      clientId: '3UFKPkQKzBeUKFyzhYeV5YY0TVrEWjve',
      redirectUri: 'http://localhost:4200/callback'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
