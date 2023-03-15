import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  user : any = [];
  name: any ;
  image: any;
  imageSrc: any;
  description: any;
  email:any;
  title:any;
  imageSelected: boolean = false;

  constructor(private http: HttpClient,public router : Router) {
    this.user = [];
  }
  
ngOnInit():any {
  const token = localStorage.getItem('token');
    console.log(token);
const headers = new HttpHeaders().set('Authorization', `${token}`);
console.log(headers);
let data  = this.http.get('http://localhost:8080/api/v1/user/getuser',{headers}).subscribe((response:any)=> {
      
// this.toastService.toasts.push(response.message);
console.log(response);
this.user = response.result;
} 
)
 
}
onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.imageSelected = true;
    this.image = file;
    this.user.image = ''; // clear imageSrc before setting it to the new image data

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };
  }
}
  onSubmit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
  
    const formData = new FormData();
    if (this.name && this.name !== this.user.name) {
      formData.append('name', this.name);
    }
    else {
      formData.append('name', this.user.name);
    }
    if (this.email && this.email !== this.user.Email) {
      formData.append('Email', this.email);
    }
    else {
      formData.append('Email', this.user.Email);
    }
    if (this.image) {
      formData.append('image', this.image);
    }
    else {
      formData.append('image', this.user ?  this.user.image : this.user.image);
    }
    if(!this.image){
      alert('Please Select Image')
    }
    else{
    this.http.put('http://localhost:8080/api/v1/blog/updateprofile', formData, { headers })
      .subscribe((response: any) => {
        console.log(response);
        this.name = '';
        this.email = '';
        this.image = '';
        if (response.success == true) {
          let role = localStorage.getItem('role');
          alert(response.message);
          if(role =='User') {
          this.router.navigate(['/user']);
        } 
        else if(role == 'Author'){
          this.router.navigate(['/author']);
        }
        else if(role == 'Admin'){
          this.router.navigate(['/admin']);
        }
      }
        else {
          alert(response.message);
        }
      });
    }
  }
  validateDescription() {
    let wordCount = this.description.split(/<.*?>/).join('').split(/\s+/).length;
    console.log(wordCount);
    
    return wordCount > 10;
  }
  remainingWords() {
    let wordCount = this.description.trim().replace(/<[^>]*>/g, '').split(/\s+/).length;
    let remainingWords = 10 - wordCount;
    return Math.max(remainingWords, 0);
  }
  onSubmission(){
    console.log('Submission')
  }
}
