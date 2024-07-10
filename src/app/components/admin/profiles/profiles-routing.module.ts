import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfileComponent } from './list-profile/list-profile.component';

const routes: Routes = [
  { path: 'listProfile', component: ListProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
