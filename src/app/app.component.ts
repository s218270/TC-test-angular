import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WeeklyChallengesComponent } from './weekly-challenges/weekly-challenges.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContestantComponent } from './contestant/contestant.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, WeeklyChallengesComponent, FormsModule, HttpClientModule, ContestantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TC-test';

  jsonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/contest-data.json').subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

}
