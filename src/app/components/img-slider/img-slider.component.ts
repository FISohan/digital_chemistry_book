import { Component, Input, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { ISlider } from '../../model/interface';
@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  constructor() { }
  @Input() slides: ISlider[] = [];
  ngOnInit(): void {
  }

}
