import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MaterialModule } from '../../../../shared/material/material.module';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { AddParentComponent } from '../add-parent/add-parent.component';
import { DetailParentComponent } from '../detail-parent/detail-parent.component';
import { ParentEleve } from '../../../../core/models/parent.model';
import { ParentEleveService } from '../../../../core/services/parentEleve.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-parents',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MaterialModule, RouterLink],
  templateUrl: './list-parents.component.html',
  styleUrl: './list-parents.component.scss'
})
export class ListParentsComponent extends UnSubscrible implements OnInit {


  displayedColumns: string[] = [
    'nom&Prenom',
    'telephone',
    'email',
    'quartier',
    'ville',
    'pays',
    'action'
]

dataSource: any;
parentList: ParentEleve[] = [];
exampleDataBase?: ParentEleveService;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
    private parentService: ParentEleveService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
){ 
    super()
}

ngOnInit(): void {
 this.getListParents();
}

getListParents(): void {
    this.subs.sink = this.parentService.getAllParentEleve().subscribe({
        next: (data) => {
            this.parentList = data
            
            this.dataSource = new MatTableDataSource<ParentEleve>(this.parentList);
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
detailParent(ecoleId: string){
    this.detailParentModal(ecoleId, 'Détail d\'une école')
}

//Modal pour la vue des détails d'une école//
detailParentModal(code: string, titre: string) {
    let _modal = this.dialog.open(DetailParentComponent, {
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
addParent(){
    this.addParentModal()
}
//Modal pour ajouter d'une école//
addParentModal() {
    let _modal = this.dialog.open(AddParentComponent, {
        width: '50%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
    })
    _modal.afterClosed().subscribe(item => {

    })
}

}
