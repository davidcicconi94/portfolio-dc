import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienciaList: any;
  constructor(private datosPortfolio: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.experienciaList = data.experience;
    });
  }

  isButtonVisible = true;

  Add() {
    this.router.navigate(['add-exp']);
  }
}
