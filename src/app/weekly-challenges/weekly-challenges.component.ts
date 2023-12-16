import { Component, Input, OnInit,  } from '@angular/core';
import { ContestantComponent } from '../contestant/contestant.component';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-weekly-challenges',
  standalone: true,
  imports: [ContestantComponent,NgClass, NgIf, NgFor],
  templateUrl: './weekly-challenges.component.html',
  styleUrl: './weekly-challenges.component.css'
})
export class WeeklyChallengesComponent implements OnInit {
    @Input() data: any;

    late: any;
    
    contestant: any[] = [];
    
    constructor() {}

    ngOnInit(): void {
        this.contestant = this.data.contestants
        this.late = this.data.late
      }
}
