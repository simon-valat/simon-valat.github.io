import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { SoftComponent } from './components/soft/soft.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { EducationComponent } from './components/education/education.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';



@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent,
    SoftComponent,
    LanguagesComponent,
    EducationComponent,
    HobbiesComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports : [ResumeComponent]
})
export class ResumeModule { }
