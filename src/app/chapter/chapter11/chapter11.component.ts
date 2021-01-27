import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter11',
  templateUrl: './chapter11.component.html',
  styleUrls: ['./chapter11.component.css']
})
export class Chapter11Component implements OnInit {
  router = [
    {link:"/introduction",name:"Introduction"},
    {link:"/lesson1",name:"11.1 জীবাশ্ম জ্বালানি (Fossil Fuel)"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
