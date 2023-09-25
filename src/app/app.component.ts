import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import FrenchTranslation from '../assets/translations/fr.json';
import EnglishTranslation from '../assets/translations/en.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translateService : TranslateService){

        translateService.setTranslation('fr',FrenchTranslation);
        translateService.setTranslation('en',EnglishTranslation);
        // this language will be used as a fallback when a translation isn't found in the current language
        translateService.setDefaultLang('fr');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
         translateService.use('fr');
  }
}
