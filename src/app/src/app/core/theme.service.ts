import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  dark = 'dark',
  light = 'light'
}

export enum DevState {
  code = 'code',
  sleep = 'sleep'
}



@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: BehaviorSubject<Theme> = new BehaviorSubject(Theme.dark);
  private devState: BehaviorSubject<DevState> = new BehaviorSubject(DevState.code);
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

  get devState$() {
    return this.devState.asObservable();
  }

  toggleDevState = () => {
    if (this.devState.value === DevState.code) {
      this.devState.next(DevState.sleep);
    } else {
      this.devState.next(DevState.code);
    }
    return this.devState;
  }
}
