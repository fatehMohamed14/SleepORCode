import { Component } from '@angular/core';
import { ThemeService, Theme } from './src/app/core/theme.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sleepORcode';
  theme$: Observable<Theme>;

  constructor(private themeService: ThemeService, private router: Router) {
    this.theme$ = this.themeService.theme$;
  }

  toggle(event) {
    this.themeService.toggleTheme();
  }

}
