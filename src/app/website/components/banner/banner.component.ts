import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() imagenBack: string = 'https://images.pexels.com/photos/374018/pexels-photo-374018.jpeg?cs=srgb&dl=pexels-burst-374018.jpg&fm=jpg';
  @Input() logo: string = './assets/img/eduargam-white.png';
  @Input() logoAlt: string = 'Eduardgamps';

  public transform = 'translate3d(0px, 0px, 0px)';
  constructor() { }

  ngOnInit(): void {
  }

}
