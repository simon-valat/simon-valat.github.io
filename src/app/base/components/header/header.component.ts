import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
  ];
  darkTheme: boolean = false;

  constructor(private themeService: ThemeService) { }

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
}
