import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./pages/home/home.component";
import {CompetencesComponent} from "./pages/competences/competences.component";
import {RealisationsComponent} from "./pages/realisations/realisations.component";
import {ExperiencesComponent} from "./pages/experiences/experiences.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'realisations', component: RealisationsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
