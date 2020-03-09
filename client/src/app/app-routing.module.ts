import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConferenceResolver} from "./conferences/conference-resolver";
import {ConferenceDetailsComponent} from "./conferences/conference-details/conference-details.component";

const routes: Routes = [
  {
    path: 'conference/:id',
    component: ConferenceDetailsComponent,
    resolve: {
      conference: ConferenceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
