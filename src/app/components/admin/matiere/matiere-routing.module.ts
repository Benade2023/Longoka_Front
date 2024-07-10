import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';

const routes: Routes = [
  { path: 'allMatieres', component: ListMatiereComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }
