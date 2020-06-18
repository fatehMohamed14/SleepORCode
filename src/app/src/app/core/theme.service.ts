import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  dark = 'dark',
  light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);

  constructor() { }

  get theme$() {
    return this.theme.asObservable();
  }

  toggleTheme = () => {
    if (this.theme.value === Theme.dark) {
      this.theme.next(Theme.light);
    } else {
      this.theme.next(Theme.dark);
    }
  }
}
