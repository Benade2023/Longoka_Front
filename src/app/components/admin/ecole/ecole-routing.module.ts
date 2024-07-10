import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEcoleComponent } from './list-ecole/list-ecole.component';

const routes: Routes = [
  {path: 'ecoleList', component: ListEcoleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcoleRoutingModule { }
