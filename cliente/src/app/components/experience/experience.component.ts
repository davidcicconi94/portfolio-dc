import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleo } from 'src/app/model/Empleo';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienciaList: any;
  empleos: Empleo[] = [];

  constructor(private datosPortfolio: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.empleos = data;
    });
  }

  isButtonVisible = true;

  Add() {
    this.router.navigate(['add-exp']);
  }
}
