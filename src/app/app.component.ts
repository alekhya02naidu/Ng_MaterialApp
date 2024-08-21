import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/components/navbar/navbar.component';
import { SidebarComponent } from './features/components/sidebar/sidebar.component';
import { AuthComponent } from './features/pages/auth/auth.component';
import { TestingTailwindComponent } from "./testing-tailwind/testing-tailwind.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponent, NavbarComponent, SidebarComponent, TestingTailwindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Admira';
}
