import { Component, OnInit } from '@angular/core';
import {MultimediaService} from "../../../../api/multimedia.service";
import {Multimedia, MultimediaResponse} from "../../../../interfaces/multimedia";

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  multimedias: MultimediaResponse[] | undefined;;
  constructor(
    private readonly multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    this.getListaMultimedia();
  }

  getListaMultimedia() {
    this.multimediaService.getAll().subscribe((res) => this.multimedias = res);
  }

  deleteMultimedia(id: number){

  }

}
