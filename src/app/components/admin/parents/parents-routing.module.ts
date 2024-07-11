import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParentsComponent } from './list-parents/list-parents.component';
import { DetailParentComponent } from './detail-parent/detail-parent.component';

const routes: Routes = [
  { path: 'listParents', component: ListParentsComponent },
  { path: 'detailParent/:id', component: DetailParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
