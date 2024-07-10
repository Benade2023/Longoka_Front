import { Component  } from '@angular/core';
import { SidebarComponent } from "../../../layout/sidebar/sidebar.component";

import { MaterialModule } from '../../../shared/material/material.module';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [SidebarComponent, MaterialModule]
})
export class DashboardComponent  {

   
  

}
