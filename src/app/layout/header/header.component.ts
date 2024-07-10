import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}

  collapsed = true;

  home(){
    this.router.navigate([''])
  }

  toggleForm() {
    const container = <HTMLDivElement>document.querySelector('.sidebar');
    container.classList.toggle('active');
    this.collapsed = !this.collapsed;
}

  oppencollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  closecollapsed() : void {
    this.collapsed = false;
  }

}
