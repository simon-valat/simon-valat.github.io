import { Component } from '@angular/core';
import { Skill } from '../../models/skills';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css'],
})
export class SoftComponent {
  faScrewdriverWrench = faScrewdriverWrench;
  skills: Skill[] = [
    {
      title: 'NodeJs',
      level: 3,
      experience: 4,
    },
    {
      title: 'TypeScript',
      level: 3,
      experience: 4,
    },
    {
      title: 'C#',
      level: 3,
      experience: 5,
    },
    {
      title: 'Visual Studio',
      level: 4,
      experience: 5,
    },
    {
      title: 'C#',
      level: 3,
      experience: 5,
    },
    {
      title: 'Azure Devops',
      level: 2,
      experience: 2,
    },
    {
      title: 'Jira',
      level: 2,
      experience: 2,
    },
    {
      title: 'Docker',
      level: 1,
      experience: 1,
    },
  ];
}
