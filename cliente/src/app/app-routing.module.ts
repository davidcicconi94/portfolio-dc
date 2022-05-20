import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AddEduComponent } from './functions/add-edu/add-edu.component';
import { AddExpComponent } from './functions/add-exp/add-exp.component';
import { AddProjectComponent } from './functions/add-project/add-project.component';
import { EditEduComponent } from './functions/edit-edu/edit-edu.component';
import { EditExpComponent } from './functions/edit-exp/edit-exp.component';
import { EditProjectComponent } from './functions/edit-project/edit-project.component';

const routes: Routes = [
  // Rutas principales
  { path: 'login', component: FormComponent },
  { path: 'portfolio', component: PortfolioComponent },

  // Rutas secundarias
  { path: 'add-exp', component: AddExpComponent },
  { path: 'edit-exp', component: EditExpComponent },
  { path: 'add-edu', component: AddEduComponent },
  { path: 'edit-edu', component: EditEduComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project', component: EditProjectComponent },

  // Default
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
