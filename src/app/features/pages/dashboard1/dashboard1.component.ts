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

}
