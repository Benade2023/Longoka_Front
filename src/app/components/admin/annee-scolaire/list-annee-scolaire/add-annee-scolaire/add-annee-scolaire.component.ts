import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { AnneeScolaireService } from '../../../../../core/services/anneeScolaire.service';
import { MatDialogRef } from '@angular/material/dialog';
import { userTest } from '../../../../../core/models/userTest.model';

@Component({
  selector: 'app-add-annee-scolaire',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './add-annee-scolaire.component.html',
  styleUrl: './add-annee-scolaire.component.scss'
})
export class AddAnneeScolaireComponent implements OnInit {

  
  addAnneeForm!: UntypedFormGroup;
  userTest: userTest = {
    userId: '',
    username: 'Benade2024',
    password: '246750',
    completName: 'Benade Mabondzo',
    birthday: '03/09/1990',
    numeroRue: 10,
    rueName: 'Masseke',
    quartier: 'Fond Tié Tié',
    ville: 'Pointe-Noire',
    pays: 'Congo',
    ecoleId: 'b0f15d85-26f5-4002-ab15-a5c2178d17ce',
    profileId: 'admin',
  }

  constructor(
    private anneeService: AnneeScolaireService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddAnneeScolaireComponent>,
  ){}

  ngOnInit(): void {
    this.addAnneeForm = this.builder.group({
      anneeScolaire: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      description: ['', Validators.required],
      ecoleId: this.userTest?.ecoleId
    })
  }

  //Methode d'ajout d'une école//
  addAnnee(){
    //console.log(this.addAnneeForm.value);
    this.anneeService.addAnneeScolaire(this.addAnneeForm.getRawValue());
    this.ref.close();
  }

  closeModal(){
    this.ref.close()
  }

}
