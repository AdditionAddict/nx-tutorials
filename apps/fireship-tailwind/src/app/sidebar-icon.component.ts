import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nx-tutorials-sidebar-icon',
  template: `
    <div class="sidebar-icon group">
      <div>{{ iconName }}</div>
      <span class="sidebar-tooltip group-hover:scale-100">{{ tooltip }}</span>
    </div>
  `,
})
export class SidebarIconComponent {
  @Input() iconName!: string;
  @Input() tooltip!: string;
}
