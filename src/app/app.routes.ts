import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'main', component: MainLayoutComponent },
    { path: 'side', component: SidebarComponent },
    {
        path: 'authenticate',
        loadChildren: () => 
            import('./components/authenticate/authenticate.module').then(m => m.AuthenticateModule)
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./components/admin/admin.module').then(m => m.AdminModule)
    }
];
