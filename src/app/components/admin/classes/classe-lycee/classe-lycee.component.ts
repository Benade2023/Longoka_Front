import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IClasse } from '../../../../core/interfaces/classe.interface';
import { userTest } from '../../../../core/models/userTest.model';
import { ClasseService } from '../../../../core/services/classe.service';
import { AddClasseComponent } from '../add-classe/add-classe.component';
import { MaterialModule } from '../../../../shared/material/material.module';

@Component({
  selector: 'app-classe-lycee',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './classe-lycee.component.html',
  styleUrl: './classe-lycee.component.scss'
})
export class ClasseLyceeComponent extends UnSubscrible implements OnInit {

     
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
          let filterClasse = data.filter(x => x.niveau === 'Lycee')
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
