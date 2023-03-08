import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.scss']
})
export class BlogDescriptionComponent implements OnInit{
  blog: any;

  constructor(private route: ActivatedRoute) {
    this.blog = {};
  }

  ngOnInit() {
    this.blog = history.state.blog;
  }
}
