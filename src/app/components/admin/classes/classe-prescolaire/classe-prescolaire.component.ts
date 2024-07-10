import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { userTest } from '../../../../core/models/userTest.model';
import { IClasse } from '../../../../core/interfaces/classe.interface';
import { ClasseService } from '../../../../core/services/classe.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { AddClasseComponent } from '../add-classe/add-classe.component';
import { ClassePrimaireComponent } from "../classe-primaire/classe-primaire.component";
import { ClasseCollegeComponent } from "../classe-college/classe-college.component";
import { ClasseLyceeComponent } from "../classe-lycee/classe-lycee.component";
import { AutreClasseComponent } from "../autre-classe/autre-classe.component";

@Component({
    selector: 'app-classe-prescolaire',
    standalone: true,
    templateUrl: './classe-prescolaire.component.html',
    styleUrl: './classe-prescolaire.component.scss',
    imports: [MaterialModule, SidebarComponent, 
        ClassePrimaireComponent, ClasseCollegeComponent,
         ClasseLyceeComponent, AutreClasseComponent]
})
export class ClassePrescolaireComponent extends UnSubscrible implements OnInit {

  
  displayedColumns: string[] = [
    'cycle',
    'classeName',
    'action'
]

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

dataSource: any;
classeList: IClasse[] = [];
exampleDataBase?: ClasseService;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
    private classeService: ClasseService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
) {
    super()
}

ngOnInit(): void {
    this.getListEcole();

}

getListEcole(): void {
    this.subs.sink = this.classeService.getAllClasse().subscribe({
        next: (data) => {
            let filterClasse = data.filter(x => x.niveau === 'Prescolaire')
            this.classeList = filterClasse.filter(w => w.ecoleId === this.userTest?.ecoleId)

            this.dataSource = new MatTableDataSource<IClasse>(this.classeList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
        error: (error: HttpErrorResponse) => {
            console.log(error);
        }
    })
}

filterTable(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}





//Mathode du bouton detail d'une école//
addClasse() {
    this.addClasseModal()
}
//Modal pour ajouter d'une école//
addClasseModal() {
    let _modal = this.dialog.open(AddClasseComponent, {
        width: '40%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
    })
    _modal.afterClosed().subscribe(item => {

    })
}

}
