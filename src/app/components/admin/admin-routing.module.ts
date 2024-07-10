import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component:SettingsComponent },
  { path: 'messagerie', component: MessageComponent },
  {
    path: 'ecole',
    loadChildren: () => 
      import('./ecole/ecole.module').then(m => m.EcoleModule)
  },
  {
    path: 'inscription',
    loadChildren: () => 
      import('./inscription/inscription.module').then(m => m.InscriptionModule)
  },
  {
    path: 'eleves',
    loadChildren: () => 
      import('./eleves/eleves.module').then(m => m.ElevesModule)
  },
  {
    path: 'professeurs',
    loadChildren: () => 
      import('./professeurs/professeurs.module').then(m => m.ProfesseursModule)
  },
  {
    path: 'parents',
    loadChildren: () => 
      import('./parents/parents.module').then(m => m.ParentsModule)
  },
  {
    path: 'notes',
    loadChildren: () => 
      import('./notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'bullteins',
    loadChildren: () => 
      import('./bulletins/bulletins.module').then(m => m.BulletinsModule)
  },
  {
    path: 'retard-absence',
    loadChildren: () => 
      import('./retard-et-absence/retard-et-absence.module').then(m => m.RetardEtAbsenceModule)
  },
  {
    path: 'anneeScolaire',
    loadChildren: () => 
      import('./annee-scolaire/annee-scolaire.module').then(m => m.AnneeScolaireModule)
  },
  {
    path: 'profiles',
    loadChildren: () => 
      import('./profiles/profiles.module').then(m => m.ProfilesModule)
  },
  {
    path: 'classes',
    loadChildren: () => 
      import('./classes/classes.module').then(m => m.ClassesModule)
  },
  {
    path: 'matieres',
    loadChildren: () => 
      import('./matiere/matiere.module').then(m => m.MatiereModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
