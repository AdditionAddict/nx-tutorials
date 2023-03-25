import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent],
  selector: 'nx-tutorials-root',
  template: ` <nx-tutorials-sidebar /> `,
})
export class AppComponent {}
