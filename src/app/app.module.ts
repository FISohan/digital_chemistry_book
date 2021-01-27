import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Chapter11Component } from './chapter/chapter11/chapter11.component';
import { IntroComponent } from './components/intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { NavListComponent } from './components/nav-list/nav-list.component';
import { IntroductionComponent } from './chapter/chapter11/introduction/introduction.component';
import { Lesson1Component } from './chapter/chapter11/lesson1/lesson1.component';
import { HeadingDirective } from './directive/heading.directive';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { TextHighlightDirective } from './directive/text-highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Chapter11Component,
    IntroComponent,
    NavListComponent,
    IntroductionComponent,
    Lesson1Component,
    HeadingDirective,
    ImgSliderComponent,
    TextHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
