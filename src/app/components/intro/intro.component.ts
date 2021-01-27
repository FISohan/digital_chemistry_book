import { Component, Input, OnInit } from '@angular/core';
import { IIntro } from '../../model/interface';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor() {}
  @Input() introData: IIntro = {};
  ngOnInit(): void {}
}
