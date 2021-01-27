import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  router = [
    {link:"/chapter11",name:"Chapter 11"},
    {link:"/chapter11",name:"Chapter 11"}
  ]
  ngOnInit(): void {
  }
}
