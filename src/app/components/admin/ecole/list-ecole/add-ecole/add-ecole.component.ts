import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { EcoleService } from '../../../../../core/services/ecole.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ecole',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './add-ecole.component.html',
  styleUrl: './add-ecole.component.scss'
})
export class AddEcoleComponent implements OnInit {

  addEcoleForm!: UntypedFormGroup;

  constructor(
    private ecoleService: EcoleService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddEcoleComponent>,
  ){}

  ngOnInit(): void {
    this.addEcoleForm = this.builder.group({
      nameEcole: ['', Validators.required],
      typeEcole: ['', Validators.required],
      numeroRue: ['', Validators.required],
      rueName: ['', Validators.required],
      quartier: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      telephoneEcole: ['', Validators.required],
      emailEcole: ['', Validators.required],
      siteWeb: ['', Validators.required],
    })
  }

  //Methode d'ajout d'une école//
  addEcole(){
    console.log(this.addEcoleForm.value);
    this.ecoleService.addEcole(this.addEcoleForm.getRawValue())
  }

  closeModal(){
    this.ref.close()
  }
}
