import { Component } from '@angular/core';
import { SidebarComponent } from "../../../layout/sidebar/sidebar.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [SidebarComponent]
})
export class SettingsComponent {

}
