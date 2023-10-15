import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../api/posts.service";
import {Post} from "../../../interfaces/post";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  public post: Post | undefined;
  private postId: string | null = '';
  public imagenBanner = '../assets/img/bg5.jpg';
  constructor(
    private readonly postService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if(!this.postId){
      this.router.navigate(['/404']);
    }else {
      this.getPost(this.postId);
    }
    console.log('informacion', this.post);
  }

  async getPost(id: string) {
    await this.postService.getOne(id).subscribe((res) => {
      this.post = res;
      console.log(res);
    });
  }

}
