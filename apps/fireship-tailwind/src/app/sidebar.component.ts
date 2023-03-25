import { Component } from '@angular/core';
import { SidebarIconComponent } from './sidebar-icon.component';

@Component({
  standalone: true,
  imports: [SidebarIconComponent],
  selector: 'nx-tutorials-sidebar',
  template: `
    <div
      class="
      fixed top-0 left-0 h-screen w-16 m-0
      flex flex-col bg-gray-900 text-white
      "
    >
      <nx-tutorials-sidebar-icon iconName="A" tooltip="Andrew" />
      <nx-tutorials-sidebar-icon iconName="B" tooltip="Barry" />
      <nx-tutorials-sidebar-icon iconName="C" tooltip="Charlie" />
      <nx-tutorials-sidebar-icon iconName="D" tooltip="Derrick" />
      <nx-tutorials-sidebar-icon iconName="E" tooltip="Eugene" />
    </div>
  `,
})
export class SidebarComponent {}
