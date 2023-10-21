import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../interfaces/post';
import {PostsService} from "../../../../api/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;
  constructor(
    private readonly postService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe((res) => this.posts = res);
  }

  deletePost(id: number) {

  }

}
