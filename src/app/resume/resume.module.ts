import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports : [ResumeComponent]
})
export class ResumeModule { }
