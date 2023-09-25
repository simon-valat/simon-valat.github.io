import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
  ];
  darkTheme: boolean = false;
  lang : string =  'en';

  constructor(private themeService: ThemeService, private translateService : TranslateService) { }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() =>{
      if(this.lang === 'en')
      {
        this.lang = 'fr';
      }else{
        this.lang = 'en';
      }
    })
  }


  /**
   * Changes theme of the app
   */
  onThemeChange(): void {
    if (this.darkTheme) {
      this.themeService.switchTheme('lara-dark');
    } else {
      this.themeService.switchTheme('lara-light');
    }
  }

  /**
   * Change the lang of the app when the flag is clicked
   */
  onLangChange() : void
  {
    this.translateService.use(this.lang);
  }
}
