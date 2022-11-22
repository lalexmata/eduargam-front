import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scroll(element: string) {
    this.scroller.scrollToAnchor(element);
  }

}
