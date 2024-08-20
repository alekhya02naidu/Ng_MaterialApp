import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav-item-expandable',
  standalone: true,
  imports: [MatListModule, CommonModule, MatIconModule],
  templateUrl: './nav-item-expandable.component.html',
  styleUrl: './nav-item-expandable.component.scss'
})
export class NavItemExpandableComponent {
  @Input() icon!: string;
  @Input() label!: string;
  isOptionsVisible: boolean = false;

  toggleOptions(): void {
    this.isOptionsVisible = !this.isOptionsVisible;
  }
}
