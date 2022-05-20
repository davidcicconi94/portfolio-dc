import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: ServiceService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.miPortfolio = data;
    });
  }
}
