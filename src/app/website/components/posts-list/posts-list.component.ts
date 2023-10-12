import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../interfaces/post";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input() Posts: Post[] | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
