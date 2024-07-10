import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { userTest } from '../../../../core/models/userTest.model';
import { ClasseService } from '../../../../core/services/classe.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-classe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.scss'
})
export class AddClasseComponent implements OnInit {

    
  addClasseForm!: UntypedFormGroup;
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
    private classeService: ClasseService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddClasseComponent>,
  ){}

  ngOnInit(): void {
    this.addClasseForm = this.builder.group({
      niveau: ['', Validators.required],
      classeName: ['', Validators.required],
      ecoleId: this.userTest?.ecoleId
    })
  }

  //Methode d'ajout d'une école//
  addClasse(){
    //console.log(this.addClasseForm.value);
    this.classeService.addClasse(this.addClasseForm.getRawValue());
    this.ref.close();
  }

  closeModal(){
    this.ref.close()
  }

}
