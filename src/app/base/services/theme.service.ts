import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document : Document) { }

  /**
   * Changes the css theme of the app
   * @param theme Name of the css theme to switch the app to
   */
  switchTheme(theme : string) : void
  {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if(themeLink)
    {
      themeLink.href = theme +'.css';
    }
  }
}
