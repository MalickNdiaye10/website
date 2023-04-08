import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./pages/home/home.component";
import {CompetencesComponent} from "./pages/competences/competences.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'competences', component: CompetencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
