import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InscriptionModule } from './inscription/inscription.module';
import { ElevesModule } from './eleves/eleves.module';
import { ProfesseursModule } from './professeurs/professeurs.module';
import { ParentsModule } from './parents/parents.module';
import { NotesModule } from './notes/notes.module';
import { BulletinsModule } from './bulletins/bulletins.module';
import { RetardEtAbsenceModule } from './retard-et-absence/retard-et-absence.module';
import { AnneeScolaireModule } from './annee-scolaire/annee-scolaire.module';
import { EcoleModule } from './ecole/ecole.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ClassesModule } from './classes/classes.module';
import { MatiereModule } from './matiere/matiere.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InscriptionModule,
    ElevesModule,
    ProfesseursModule,
    ParentsModule,
    NotesModule,
    BulletinsModule,
    RetardEtAbsenceModule,
    AnneeScolaireModule,
    EcoleModule,
    ProfilesModule,
    ClassesModule,
    MatiereModule
  ]
})
export class AdminModule { }
