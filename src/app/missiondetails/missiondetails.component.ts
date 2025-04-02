import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SpaceXService } from '../services/space-x.service';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;

  constructor(private route: ActivatedRoute, private router: Router, private service: SpaceXService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getMissionById(id).subscribe((data: Mission) => {
      this.mission = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
