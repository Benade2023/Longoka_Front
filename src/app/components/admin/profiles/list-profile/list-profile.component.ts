import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { userTest } from '../../../../core/models/userTest.model';
import { Profiles } from '../../../../core/models/profile.model';
import { ProfilesService } from '../../../../core/services/profile.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { MaterialModule } from '../../../../shared/material/material.module';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-list-profile',
  standalone: true,
  imports: [MaterialModule, CommonModule, SidebarComponent],
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.scss'
})
export class ListProfileComponent extends UnSubscrible implements OnInit {

  
  displayedColumns: string[] = [
    'profileName',
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
profileList: Profiles[] = [];
exampleDataBase?: ProfilesService;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(
    private profileService: ProfilesService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
) {
    super()
}

ngOnInit(): void {
    this.getListProfile();

}

getListProfile(): void {
    this.subs.sink = this.profileService.getAllProfiles().subscribe({
        next: (data) => {
            this.profileList = data.filter(w => w.ecoleId === this.userTest?.ecoleId)

            this.dataSource = new MatTableDataSource<Profiles>(this.profileList);
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
addProfile() {
    this.addProfileModal()
}
//Modal pour ajouter d'une école//
addProfileModal() {
    let _modal = this.dialog.open(AddProfileComponent, {
        width: '40%',
        enterAnimationDuration: '600ms',
        exitAnimationDuration: '600ms',
    })
    _modal.afterClosed().subscribe(item => {

    })
}

}
