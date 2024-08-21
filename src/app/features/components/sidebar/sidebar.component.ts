import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatCardActions, MatCardHeader, NavbarComponent, NavItemComponent, 
    MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, CommonModule, MatBadgeModule, NavbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isOpen: boolean = true;
  isDashboardOptionsVisible: boolean = false;
  dashboardItem = {
    name: 'Dashboard', icon: 'assets/icons/dashboard.svg', hasSubmenu: true, submenu: ['Dashboard 1', 'Dashboard 2']
  };
  navItems = [
    { name: 'Calendar', icon: 'assets/icons/calendar.svg', hasSubmenu: false },
    { name: 'Advance Table', icon: 'assets/icons/table.svg', hasSubmenu: false },
    { name: 'Task', icon: 'assets/icons/tasks.svg', badge: '5', hasSubmenu: false },
    { name: 'Contacts', icon: 'assets/icons/contacts.svg', hasSubmenu: false },
    { name: 'Material', icon: 'assets/icons/material.svg', hasSubmenu: true, submenu: ['Form Control', 'Navigation', 'Layout'] },
    { name: 'Forms', icon: 'assets/icons/form.svg', hasSubmenu: true, submenu: ['Form Elements', 'Form Examples', 'Wizard', 'Editors'] },
    { name: 'Tables', icon: 'assets/icons/tables.svg', hasSubmenu: true, submenu: ['Pagination Table', 'Sorting Table'] },
    { name: 'Charts', icon: 'assets/icons/chart.svg', hasSubmenu: true, submenu: ['Echarts', 'Chartjs', 'Apexchart'] },
    { name: 'Widgets', icon: 'assets/icons/tasks.svg', hasSubmenu: false },
    { name: 'Profile', icon: 'assets/icons/session.svg', hasSubmenu: true, submenu: ['Overview', 'Settings'] },
    { name: 'Session', icon: 'assets/icons/session.svg', hasSubmenu: true, submenu: ['403', '404', '500'] },
    { name: 'Utilities', icon: 'assets/icons/utlities.svg', hasSubmenu: true, submenu: ['CSS Grid', 'CSS Helpers'] },
    { name: 'Menu Level', icon: 'assets/icons/menu-level.svg', hasSubmenu: true, submenu: ['Level 1.1', 'LEvel 1.2'] }
  ];

  constructor(private router: Router) {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}


