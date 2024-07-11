import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { ParentEleveService } from '../../../../core/services/parentEleve.service';
import { MatDialogRef } from '@angular/material/dialog';
import { userTest } from '../../../../core/models/userTest.model';
import { ProfilesService } from '../../../../core/services/profile.service';
import { Profiles } from '../../../../core/models/profile.model';

@Component({
  selector: 'app-add-parent',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './add-parent.component.html',
  styleUrl: './add-parent.component.scss'
})
export class AddParentComponent implements OnInit {

  
  addParentForm!: UntypedFormGroup;
  profilList: Profiles[] = [];

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
    private parentService: ParentEleveService,
    private profileService: ProfilesService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddParentComponent>,
  ){}

  ngOnInit(): void {

    this.profileService.getAllProfiles().subscribe((item: Profiles[]) => {
      this.profilList = item;
    })


    this.addParentForm = this.builder.group({
      completName: ['', Validators.required],
      birthday: ['', Validators.required],
      telephoneParent: ['', Validators.required],
      emailParent: ['', Validators.required],
      numeroRue: ['', Validators.required],
      rueName: ['', Validators.required],
      quartier: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      profileId: ['', Validators.required],
      ecoleId: this.userTest.ecoleId,
    })
  }

  //Methode d'ajout d'une école//
  addParent(){
    //console.log(this.addParentForm.value);
    this.parentService.addParentEleve(this.addParentForm.getRawValue());
    this.ref.close()
  }

  closeModal(){
    this.ref.close()
  }

}
