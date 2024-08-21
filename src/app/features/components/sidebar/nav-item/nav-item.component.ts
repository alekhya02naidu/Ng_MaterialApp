import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, MatBadgeModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() item: any;
  isSubmenuVisible: boolean = false;

  constructor(private router: Router) { }

  toggleSubmenu(): void {
    if (this.item.hasSubmenu) {
      this.isSubmenuVisible = !this.isSubmenuVisible;
    }
    else {
      this.navigateTo(this.item.name);
    }
  }

  onSubmenuClick(submenu: string): void {
    this.navigateTo(submenu);
  }

  navigateTo(submenu: string): void {
    const submenuRoute = '/' + submenu.toLowerCase().replace(/\s+/g, '-'); //convert to lowercase
    this.router.navigate([submenuRoute]);
  }
}
