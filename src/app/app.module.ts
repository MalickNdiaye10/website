import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import {NgOptimizedImage} from "@angular/common";
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompetencesComponent,
    RealisationsComponent,
    ExperiencesComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
