import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isButtonVisible = true;

  constructor(private datosPortfolio: ServiceService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {});
  }

  toggle() {
    this.isButtonVisible = false;
    console.log(this.isButtonVisible);
  }
}
