import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { userTest } from '../../../../core/models/userTest.model';
import { Matiere } from '../../../../core/models/matiere.model';
import { MatiereService } from '../../../../core/services/matiere.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';

@Component({
  selector: 'app-list-matiere',
  standalone: true,
  imports: [MaterialModule, SidebarComponent, CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.scss'
})
export class ListMatiereComponent extends UnSubscrible implements OnInit{

  
  displayedColumns: string[] = [
    'cycle',
    'matiereName',
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
matiereList: Matiere[] = [];
exampleDataBase?: MatiereService;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
    private matiereService: MatiereService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
) {
    super()
}

ngOnInit(): void {
    this.getListEcole();

}

getListEcole(): void {
    this.subs.sink = this.matiereService.getAllMatiere().subscribe({
        next: (data) => {
            let filterClasse = data.filter(x => x.niveau === 'Prescolaire')
            this.matiereList = filterClasse.filter(w => w.ecoleId === this.userTest?.ecoleId)

            this.dataSource = new MatTableDataSource<Matiere>(this.matiereList);
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
addMatiere() {
    this.addMatiereModal()
}
//Modal pour ajouter d'une école//
addMatiereModal() {
    let _modal = this.dialog.open(AddMatiereComponent, {
        width: '40%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
    })
    _modal.afterClosed().subscribe(item => {

    })
}


}
