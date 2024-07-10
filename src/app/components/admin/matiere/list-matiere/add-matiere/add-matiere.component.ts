import { Component, ElementRef, Inject, OnInit, ViewChild, input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { userTest } from '../../../../../core/models/userTest.model';
import { MatiereService } from '../../../../../core/services/matiere.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { CommonModule, DOCUMENT } from '@angular/common';
import { IClasse } from '../../../../../core/interfaces/classe.interface';
import { ClasseService } from '../../../../../core/services/classe.service';

@Component({
  selector: 'app-add-matiere',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './add-matiere.component.html',
  styleUrl: './add-matiere.component.scss'
})
export class AddMatiereComponent implements OnInit {

  listClasse: IClasse[] = [];
  classeBy: any;
  infoClasse?: IClasse;
    
  addMatiereForm!: UntypedFormGroup;
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
    private matiereService: MatiereService,
    private classeService: ClasseService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddMatiereComponent>,
    @Inject(DOCUMENT) private _document = Document
  ){}

  @ViewChild('classeName') input! : ElementRef;

  ngOnInit(): void {
    this.addMatiereForm = this.builder.group({
      niveau: ['', Validators.required],
      matiereName: ['', Validators.required],
      classe: this.builder.array([]),
      ecoleId: this.userTest?.ecoleId
    })

    this.classeService.getAllClasse().subscribe((item: IClasse[]) => {
      this.listClasse = item.filter(m => m.ecoleId === this.userTest?.ecoleId)
    })

  }

  get Classe(){
    return this.addMatiereForm?.controls['classe'] as FormArray
  }

  createClasse(): FormGroup {
    return this.builder.group({
      classeId: [''],
      niveau: this.infoClasse?.niveau,
      classeName: [''],
      ecoleId: this.userTest?.ecoleId
    })
  }

  AddClasse(){
    this.Classe.push(this.createClasse());
  }
  DeleteClasse(index: number) {
    this.Classe.removeAt(index);
    this.Classe.markAsDirty();
  }

  getClasseId(){
    let recupId = this.addMatiereForm.value.classe
    recupId.map((item: IClasse) => {
      this.classeBy = item
      console.log(this.classeBy);
      
      this.classeService.getAllClasse().subscribe((classe: IClasse[]) => {
        this.infoClasse = classe.find(x => x.classeId === this.classeBy.classeId);
          for(let i = 0; i < classe.length; i++){
            this.input.nativeElement.value = this.infoClasse?.classeId
          }
      })
    })    
  }

  //Methode d'ajout d'une école//
  addMatiere(){
    console.log(this.addMatiereForm.value);
    //this.matiereService.addMatiere(this.addMatiereForm.getRawValue());
    this.ref.close();
  }

  closeModal(){
    this.ref.close()
  }

}
