import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatFormFieldModule, MatSelectModule, CommonModule, MatMenuModule,
    MatDividerModule, MatListModule, MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  isSidebarOpen: boolean = true;
  languages: { country: string, name: string, flag: string }[] = [
    { country: 'us', name: 'English', flag: 'assets/icons/flags/us-flag.svg' },
    { country: 'spain', name: 'Spanish', flag: 'assets/icons/flags/spain-flag.svg' },
    { country: 'germany', name: 'German', flag: 'assets/icons/flags/germany-flag.svg' }
  ];
  selectedLanguage: { country: string, name: string, flag: string } = this.languages[0];

  toggleSidenav(): void {
    console.log("triggered");
    this.toggleSidebar.emit();
  }

  toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  }

  updateCulture(language: any): void {
    this.selectedLanguage = language;
  }

  goToProfile() {
    // Navigate to profile page
  }

  editProfile() {
    // Navigate to edit profile page
  }

  restoreDefault() {
    // Restore default settings
  }

  logout() {
    // Handle user logout
  }
}
