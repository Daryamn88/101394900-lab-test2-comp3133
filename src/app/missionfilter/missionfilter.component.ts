import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio'; // ✅ ADD THIS

import { SpaceXService } from '../services/space-x.service';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule // ✅ Include here too
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  missions: Mission[] = [];
  year: string = '';

  constructor(private service: SpaceXService) {}

  filterMissions(): void {
    if (this.year) {
      this.service.getMissionsByYear(this.year).subscribe((data: Mission[]) => {
        this.missions = data;
      });
    }
  }
}
