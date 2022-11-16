import { Component, OnInit } from '@angular/core';
import {OpinionService} from "../../../api/opinion.service";

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit {

  opinions: any;
  swiperConfig: any = {
    navigation: true,
    spaceBetween: 30,
    autoplay: {
      delay: 100,
      disableOnInteraction: false
    },
    breakpoints: { 
      '992': {
        slidesPerView: 4,
        spaceBetween: 30
    }, 
    '480': {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '640': {
      slidesPerView: 2,
      spaceBetween: 50, 
    },
  },
}

  constructor(
    private opinionService: OpinionService
  ) { }

  ngOnInit(): void {
    this.getOpinions();
  }

  async getOpinions() {
    this.opinions = await this.opinionService.getOpinions();
    console.log(this.opinions);
  }

}
