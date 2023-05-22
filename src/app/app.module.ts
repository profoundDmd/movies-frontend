import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
