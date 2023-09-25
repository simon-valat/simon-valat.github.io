import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--light-main');
    const textColorSecondary = documentStyle.getPropertyValue('--light-main');

    this.data = {
      labels: ['Angular', '.NET Core', 'MS SQL', 'Git', 'Capacitor',],
      datasets: [
        {
          borderColor: documentStyle.getPropertyValue('--light-main'),
          pointBackgroundColor: documentStyle.getPropertyValue('--light-main'),
          pointBorderColor: documentStyle.getPropertyValue('--light-main'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--light-main'),
          data: [7, 6, 7, 7, 4],
          backgroundColor : documentStyle.getPropertyValue('--dark-secondary')+'80',
          fill: true
        },
      ]
    };

    this.options = {
      plugins: {
        legend: {
          display : false
        }
      },
      scales: {
        r: {
          grid: {
            color : documentStyle.getPropertyValue('--dark-secondary')
          },
          pointLabels: {
            color: textColorSecondary
          },
          ticks : {
            stepSize: 2
          },
          angleLines :{
            color : textColorSecondary
          },
          min: 0,
          max : 10,
        }
      },
    }
  }

}
