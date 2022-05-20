import { Component, Inject, OnInit } from '@angular/core';
import { Empleo } from 'src/app/model/Empleo';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  empleo: Empleo = new Empleo();

  constructor(private empleoService: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  guardarEmpleo() {
    this.empleoService.agregarEmpleo(this.empleo).subscribe(
      (data) => {
        this.irAPortfolio();
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  irAPortfolio() {
    this.router.navigate(['/portfolio']);
  }

  onSubmit() {
    this.guardarEmpleo();
  }
}
