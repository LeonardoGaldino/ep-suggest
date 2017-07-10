import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SerieWrapper } from './serieWrapperComponent/serieWrapperComponent';

@NgModule({
  declarations: [
    AppComponent,
    SerieWrapper
  ],
  imports: [
  	HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
