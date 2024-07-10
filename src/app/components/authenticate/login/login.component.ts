import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [HeaderComponent, RouterLink, FormsModule, ReactiveFormsModule, CommonModule]
})
export class LoginComponent implements OnInit {

    loginForm!: UntypedFormGroup
    constructor(
        private router: Router,
        private builder: FormBuilder
    ){}

    ngOnInit(): void {
        this.loginForm = this.builder.group({
            ecole: [''],
            telephone: [''],
            password: ['']
        })
    }

    dashboard(){
        console.log(this.loginForm.value);
        
        this.router.navigate(['/admin/dashboard'])
    }

    toggleForm() {
        const container = <HTMLDivElement>document.querySelector('.container-form');
        container.classList.toggle('active');
    }
}
