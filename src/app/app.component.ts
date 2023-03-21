import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public router: Router){}
ngOnInit(): void {
  const user = localStorage.getItem('role');
  if (user) {
    user === 'Admin' ? this.router.navigate(['/admin']):
    user === 'Author' ? this.router.navigate(['/author']) :
    user === 'User' ? this.router.navigate(['/user']):''

}
}

onSubmit(data:any)
{
  //(data);
}
}
