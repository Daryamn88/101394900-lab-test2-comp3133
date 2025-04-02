import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Mission } from '../models/mission.model';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  year: string = '';
  launchSuccess: string = '';
  landSuccess: string = '';

  constructor(private service: SpaceXService) {}

  ngOnInit(): void {
    this.loadFilteredMissions();
  }

  loadFilteredMissions(): void {
    let url = 'https://api.spacexdata.com/v3/launches?';
  
    if (this.year) {
      url += `launch_year=${this.year}&`;
    }
  
    if (this.launchSuccess) {
      url += `launch_success=${this.launchSuccess === 'success'}&`;
    }
  
    if (this.landSuccess) {
      url += `land_success=${this.landSuccess === 'success'}&`;
    }
  
    this.service.getMissionsByURL(url).subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }
  
  
  onLaunchChange(): void {
    this.loadFilteredMissions();
  }
  
  onLandingChange(): void {
    this.loadFilteredMissions();
  }
  

  resetFilters(): void {
    this.year = '';
    this.launchSuccess = '';
    this.landSuccess = '';
    this.loadFilteredMissions();
  }
}
