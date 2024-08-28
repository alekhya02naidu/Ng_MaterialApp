import { Component } from '@angular/core';
import { RevenueCardComponent } from '../../components/revenue-card/revenue-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [RevenueCardComponent, CommonModule],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.scss'
})
export class Dashboard1Component {
  revenueCards = [
    { heading: 'Investments', badgeTitle: 'Monthly', amount: '$47,000', progress: 55 },
    { heading: 'Sales', badgeTitle: 'Annual', amount: '$22,784', progress: 42 },
    { heading: 'Cost', badgeTitle: 'Today', amount: '$1,587', progress: 75 },
    { heading: 'Profit', badgeTitle: 'Weekly', amount: '$1,400', progress: 48 }
  ];

  getCardClasses(index: number): string {
    return index % 2 === 0 
      ? 'bg-orange-100 text-orange-600 progress-bar-orange' 
      : 'bg-gray-100 text-gray-600 progress-bar-gray';
  }
}
