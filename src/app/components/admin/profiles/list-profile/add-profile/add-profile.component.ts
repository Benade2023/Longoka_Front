import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../../../../core/services/profile.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { userTest } from '../../../../../core/models/userTest.model';
import { MaterialModule } from '../../../../../shared/material/material.module';

@Component({
  selector: 'app-add-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './add-profile.component.html',
  styleUrl: './add-profile.component.scss'
})
export class AddProfileComponent implements OnInit {

    
  addProfileForm!: UntypedFormGroup;
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
    private profileService: ProfilesService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddProfileComponent>,
  ){}

  ngOnInit(): void {
    this.addProfileForm = this.builder.group({
      profileName: ['', Validators.required],
      description: ['', Validators.required],
      ecoleId: this.userTest?.ecoleId
    })
  }

  //Methode d'ajout d'une école//
  addProfile(){
    //console.log(this.addProfileForm.value);
   this.profileService.addProfiles(this.addProfileForm.getRawValue());
    this.ref.close();
  }

  closeModal(){
    this.ref.close()
  }

}
