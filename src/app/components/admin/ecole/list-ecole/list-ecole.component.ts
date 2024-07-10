import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';
import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ecole } from '../../../../core/models/ecole.model';
import { EcoleService } from '../../../../core/services/ecole.service';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SidebarComponent } from "../../../../layout/sidebar/sidebar.component";
import { AddEcoleComponent } from './add-ecole/add-ecole.component';

@Component({
    selector: 'app-list-ecole',
    standalone: true,
    templateUrl: './list-ecole.component.html',
    styleUrl: './list-ecole.component.scss',
    imports: [MaterialModule, SidebarComponent]
})
export class ListEcoleComponent
extends UnSubscrible implements OnInit {

  displayedColumns: string[] = [
    'nomEcole',
    'telephone',
    'email',
    'quartier',
    'ville',
    'pays',
    'action'
]

dataSource: any;
ecoleList: Ecole[] = [];
exampleDataBase?: EcoleService;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
    private ecoleService: EcoleService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
){ 
    super()
}

ngOnInit(): void {
 this.getListEcole();
}

getListEcole(): void {
    this.subs.sink = this.ecoleService.getAllEcole().subscribe({
        next: (data) => {
            this.ecoleList = data
            
            this.dataSource = new MatTableDataSource<Ecole>(this.ecoleList);
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

    if(this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

//Mathode du bouton detail d'une école//
detailEcole(ecoleId: string){
    this.detailEcoleModal(ecoleId, 'Détail d\'une école')
}

//Modal pour la vue des détails d'une école//
detailEcoleModal(code: string, titre: string) {
    let _modal = this.dialog.open(DetailEcoleComponent, {
        width: '40%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
        data: {
            titre: titre,
            code: code
        }
    })
    _modal.afterClosed().subscribe(item => {

    })
}

//Mathode du bouton detail d'une école//
addEcole(){
    this.addEcoleModal()
}
//Modal pour ajouter d'une école//
addEcoleModal() {
    let _modal = this.dialog.open(AddEcoleComponent, {
        width: '50%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
    })
    _modal.afterClosed().subscribe(item => {

    })
}

}
