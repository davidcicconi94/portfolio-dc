// Modules
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { ServiceService } from './service/service.service';
import { MatDialog } from '@angular/material/dialog';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExpComponent } from './functions/add-exp/add-exp.component';
import { EditExpComponent } from './functions/edit-exp/edit-exp.component';
import { EditEduComponent } from './functions/edit-edu/edit-edu.component';
import { AddEduComponent } from './functions/add-edu/add-edu.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './functions/add-project/add-project.component';
import { EditProjectComponent } from './functions/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FormComponent,
    AptitudesComponent,
    ExperienceComponent,
    AchievementsComponent,
    EducationComponent,
    PortfolioComponent,
    AddExpComponent,
    EditExpComponent,
    EditEduComponent,
    AddEduComponent,
    ProjectsComponent,
    AddProjectComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
