import { Component, Input } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-contestant',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './contestant.component.html',
  styleUrl: './contestant.component.css'
})
export class ContestantComponent {
    @Input() contestant: any;
}
