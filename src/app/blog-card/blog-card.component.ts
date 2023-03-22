import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  userList: any;

  constructor(private httpClient: HttpClient, public modalService: NgbModal, private config: NgbModalConfig, private router: Router) {
    this.userList = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getuserList();
  }

  getuserList(): any {
    this.httpClient.get('http://localhost:8080/api/v1/blog/getblog').subscribe((response: any) => {
      //(response.data);
      this.userList = response.data;
    });
  }

  navigateToBlogDetails(blog: any): any {
    // Navigate to the blog details page with the blog data as a parameter
    this.router.navigate([`/blog-details/${blog._id}`], { state: { blog: blog } });
    window.scroll(0,0);
  }

  openModal(index: number) {
    let modal = document.getElementById(`exampleModal${index}`);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal() {
    let modal = document.querySelector('.modal.show') as HTMLElement;
    if (modal) {
      modal.classList.remove('show');
      modal.style.setProperty('display', 'none', 'important');
    }
  }

  ngOnDestroy() {
    this.closeModal();
  }
}
