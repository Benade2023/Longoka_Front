import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AddAnneeScolaireComponent } from './add-annee-scolaire/add-annee-scolaire.component';
import { AnneeScolaire } from '../../../../core/models/anneeScolaire.model';
import { AnneeScolaireService } from '../../../../core/services/anneeScolaire.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, DOCUMENT } from '@angular/common';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { userTest } from '../../../../core/models/userTest.model';

@Component({
    selector: 'app-list-annee-scolaire',
    standalone: true,
    imports: [MaterialModule, SidebarComponent, CommonModule],
    templateUrl: './list-annee-scolaire.component.html',
    styleUrl: './list-annee-scolaire.component.scss'
})
export class ListAnneeScolaireComponent extends UnSubscrible implements OnInit {


    displayedColumns: string[] = [
        'anneeScolaire',
        'dateDebut',
        'dateFin',
        'description',
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
    anneeScolaireList: AnneeScolaire[] = [];
    exampleDataBase?: AnneeScolaireService;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private anneeScolaireService: AnneeScolaireService,
        public dialog: MatDialog,
        @Inject(DOCUMENT) private _document: Document
    ) {
        super()
    }

    ngOnInit(): void {
        this.getListEcole();

    }

    getListEcole(): void {
        this.subs.sink = this.anneeScolaireService.getAllAnneeScolaire().subscribe({
            next: (data) => {
                this.anneeScolaireList = data.filter(w => w.ecoleId === this.userTest?.ecoleId)

                this.dataSource = new MatTableDataSource<AnneeScolaire>(this.anneeScolaireList);
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
    addAnneeScolaire() {
        this.addAnneeScolaireModal()
    }
    //Modal pour ajouter d'une école//
    addAnneeScolaireModal() {
        let _modal = this.dialog.open(AddAnneeScolaireComponent, {
            width: '40%',
            enterAnimationDuration: '600ms',
            exitAnimationDuration: '600ms',
        })
        _modal.afterClosed().subscribe(item => {

        })
    }
}
