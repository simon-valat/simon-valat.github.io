import { Component, OnInit } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  data: any;
  options: any;
  faGear = faGear;
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
          data: [8, 6, 7, 7, 4],
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
            color: textColorSecondary,
            font: {
              size: 20,
              family : 'Biome'
            }
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
      elements :{
        point : {
          radius : 5,
          hoverRadius : 7
        }
      }
    }
  }

}
