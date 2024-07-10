import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { navBardata } from './sideBar.data';
import { MaterialModule } from '../../shared/material/material.module';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';
import { EcoleService } from '../../core/services/ecole.service';
import { Ecole } from '../../core/models/ecole.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  collapsed = true;
  screenWidth = 0;

  currentUser!: User;
  currentSchool?: Ecole;

  menuAux = false;

  constructor(
    private authService: AuthService,
    private ecoleService: EcoleService
  ){}

  openMenuAux(): void {
    this.menuAux = !this.menuAux
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  date = new Date()

  dataNav = navBardata

  openCollapsed(): void {
    const container = <HTMLDivElement>document.querySelector('.sidebar-content');
    container.classList.toggle('active');
    const containerBody = <HTMLDivElement>document.querySelector('.container-outlet');
    containerBody.classList.toggle('full');
    const containerHead = <HTMLDivElement>document.querySelector('.head-logo');
    containerHead.classList.toggle('fullWidth');

    this.collapsed = !this.collapsed
  }

  ngOnInit(): void {
   this.currentUser  = {
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

   this.ecoleService.getAllEcole().subscribe((item: Ecole[]) => {
    this.currentSchool = item.find(w => w.ecoleId === this.currentUser.ecoleId)
   })    

  }
}
