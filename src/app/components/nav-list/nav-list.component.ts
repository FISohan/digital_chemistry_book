import { Component, Input, OnInit } from '@angular/core';
import { INavList } from "../../model/interface";
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor() { }
  @Input() route ?: INavList[];
  ngOnInit(): void {
  }

}
