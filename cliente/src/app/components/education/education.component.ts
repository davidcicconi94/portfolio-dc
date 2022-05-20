import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: any;

  constructor(private datosPortfolio: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {});
  }

  isButtonVisible = true;

  Add() {
    this.router.navigate(['add-edu']);
  }
}
