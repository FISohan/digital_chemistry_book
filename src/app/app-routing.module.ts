import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter11Component } from './chapter/chapter11/chapter11.component';
import { IntroductionComponent } from './chapter/chapter11/introduction/introduction.component';
import { Lesson1Component } from './chapter/chapter11/lesson1/lesson1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'chapter11', component: Chapter11Component },
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'lesson1',component:Lesson1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
