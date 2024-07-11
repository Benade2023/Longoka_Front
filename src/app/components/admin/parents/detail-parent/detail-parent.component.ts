import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { UnSubscrible } from '../../../../shared/UnSubscrible.module';
import { ParentEleve } from '../../../../core/models/parent.model';
import { Eleve } from '../../../../core/models/eleve.model';
import { userTest } from '../../../../core/models/userTest.model';
import { ParentEleveService } from '../../../../core/services/parentEleve.service';
import { EleveService } from '../../../../core/services/eleve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-parent',
  standalone: true,
  imports: [SidebarComponent, MaterialModule, CommonModule],
  templateUrl: './detail-parent.component.html',
  styleUrl: './detail-parent.component.scss'
})
export class DetailParentComponent extends UnSubscrible implements OnInit {

  displayedColumns: string[] = [
    'nom&Prenom',
    'telephone',
    'email',
    'quartier',
    'ville',
    'pays',
    'action'
]

  infoTuteur?: ParentEleve;
  myEleve: Eleve[] = [];
  route: ActivatedRoute;

dataSource: any;


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
    private eleveService: EleveService,
    private _route: ActivatedRoute
  ){
    super();
    this.route = _route
  }

  ngOnInit(): void {
    const idParent = this._route.snapshot.paramMap.get('id');
    this.subs.sink = this.parentService.getAllParentEleve().subscribe((item: ParentEleve[]) => {
      this.infoTuteur = item.find(x => x.parentId === idParent)
    })
  }

}
