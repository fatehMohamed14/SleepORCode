import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './src/app/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
