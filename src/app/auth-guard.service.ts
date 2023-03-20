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

