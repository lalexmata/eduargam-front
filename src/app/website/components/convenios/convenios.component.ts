import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {OpinionService} from "../../../api/opinion.service";
import {ConveniosService} from "../../../api/convenios.service";


@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit {

  convenios: any;
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
  images = [
    {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
    {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
    {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
    {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
    {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
    {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
  ];

  constructor(
    private conveniosService: ConveniosService
  ) { }

  ngOnInit(): void {
    this.getConvenios();
  }

  async getConvenios() {
    this.convenios = await this.conveniosService.getConvenios();
    console.log(this.convenios);
  }




}
