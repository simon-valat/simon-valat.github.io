import { Component } from '@angular/core';
import { faPizzaSlice, faPersonRunning ,faPersonSwimming, faPersonHiking, faGamepad,faCode,faFilm } from '@fortawesome/free-solid-svg-icons';
import { faWizardsOfTheCoast, faSteam} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  faPizzaSlice=faPizzaSlice;
  hobbies = [faPersonSwimming,faPersonRunning,faPersonHiking,faGamepad,faWizardsOfTheCoast,faSteam,faCode,faFilm];
}
