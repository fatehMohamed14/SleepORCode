import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../core/theme.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  mode$: Observable<Theme>;
  constructor(private themeService: ThemeService, private router: Router) {
    this.mode$ = this.themeService.theme$;
  }

  ngOnInit(): void {
  }

  toggle(event) {
    this.themeService.toggleTheme();
    this.router.navigate(['/code']);
  }

}
