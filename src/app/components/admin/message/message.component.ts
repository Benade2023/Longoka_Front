import { Component } from '@angular/core';
import { SidebarComponent } from "../../../layout/sidebar/sidebar.component";

@Component({
    selector: 'app-message',
    standalone: true,
    templateUrl: './message.component.html',
    styleUrl: './message.component.scss',
    imports: [SidebarComponent]
})
export class MessageComponent {

}
