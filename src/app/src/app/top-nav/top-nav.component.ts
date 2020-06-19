import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme, DevState } from '../core/theme.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  devState$: Observable<DevState>;
  constructor(private themeService: ThemeService, private router: Router) {
    this.devState$ = this.themeService.devState$;
  }

  ngOnInit(): void {
  }

  toggle() {
    const newState = this.themeService.toggleDevState();
    if (newState.value === DevState.sleep) {
      this.router.navigate(['/sleep']);
    } else {
      this.router.navigate(['/code']);
    }
  }

}
