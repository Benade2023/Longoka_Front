import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassePrescolaireComponent } from './classe-prescolaire/classe-prescolaire.component';
import { ClassePrimaireComponent } from './classe-primaire/classe-primaire.component';
import { ClasseCollegeComponent } from './classe-college/classe-college.component';
import { AutreClasseComponent } from './autre-classe/autre-classe.component';

const routes: Routes = [
  { path: 'allClasses', component: ClassePrescolaireComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
