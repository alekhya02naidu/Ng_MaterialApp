import { Component } from '@angular/core';
import { NavbarComponent } from '../../features/components/navbar/navbar.component';
import { SidebarComponent } from '../../features/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isSidebarOpen: boolean = true;

  onToggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
