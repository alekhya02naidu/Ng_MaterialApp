import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-revenue-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatProgressBarModule],
  templateUrl: './revenue-card.component.html',
  styleUrl: './revenue-card.component.scss'
})
export class RevenueCardComponent {
  @Input() heading: string = "";
  @Input() badgeTitle: string = "";
  @Input() amount: string = "";
  @Input() progress: number = 0;
}
