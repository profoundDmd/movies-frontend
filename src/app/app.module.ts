import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './component/add-movie/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
