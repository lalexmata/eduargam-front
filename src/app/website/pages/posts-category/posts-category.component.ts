import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../api/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrls: ['./posts-category.component.css']
})
export class PostsCategoryComponent implements OnInit {
  posts: any;
  private category_name: string | null | undefined;
  public title: string = '';
  public imagenBanner = '../assets/img/bg5.jpg';
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.category_name =this.route.snapshot.paramMap.get('category');
    this.title =  `Publicaciones de ${this.category_name}`;
    if(!this.category_name){
      this.router.navigate(['/404']);
    }else {
      this.title = 'Publicaciones de ' + this.category_name;
      this.getPosts(this.category_name);
    }
  }

  getPosts(category: string) {
    this.postService.getByCategory(category)
      .subscribe((res) => this.posts = res);
  }
}
