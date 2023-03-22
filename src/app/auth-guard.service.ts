import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  isAuthenticated(): any {
    const currentUser = localStorage.getItem('token');
    if(!currentUser){
   return  this.router.navigate(['/']);
    }
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const currentUser:any = localStorage.getItem('role');
    if (currentUser  === expectedRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
 
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = localStorage.getItem('role');
    if (user) {
      user === 'Admin' ? this.router.navigate(['/admin']):
      user === 'Author' ? this.router.navigate(['/author']) :
      user === 'User' ? this.router.navigate(['/user']):''

      return false;
    }
    return true;
  }
}

