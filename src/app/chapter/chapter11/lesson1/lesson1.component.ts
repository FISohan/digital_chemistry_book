import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css'],
})
export class Lesson1Component implements OnInit {
  slides = [
    { image: '/assets/img/chapter11/lesson1/formation-1.jpg' },
    { image: '/assets/img/chapter11/lesson1/formation-2.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
