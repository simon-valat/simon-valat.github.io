import { Component, OnInit } from '@angular/core';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faGraduationCap = faGraduationCap
  education: any[] = [];

  ngOnInit(): void {
    this.education = [
      {
        titleKey : 'IsisTitle',
        timeSpan : '2018 - 2021, Castres',
        descritpionKey : 'IsisDescription'
      },
      {
        titleKey : 'PeipTitle',
        timeSpan : '2016 - 2018, Montpellier',
        descritpionKey : 'PeipDescription'
      },
      {
        titleKey : 'BnssaTitle',
        timeSpan : '2016, Albi',
        descritpionKey : 'BnssaDescription'
      },
  ];
  }
}
