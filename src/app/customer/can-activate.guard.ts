import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../core/services/auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authservice.isAuthenticated) { 
        return true;
    }

    //Track URL user is trying to go to so we can send them there after logging in
    this.authservice.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

}