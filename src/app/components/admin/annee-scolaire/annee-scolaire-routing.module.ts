import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnneeScolaireComponent } from './list-annee-scolaire/list-annee-scolaire.component';

const routes: Routes = [
  {  path: 'listAnneeScolaire', component: ListAnneeScolaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnneeScolaireRoutingModule { }
