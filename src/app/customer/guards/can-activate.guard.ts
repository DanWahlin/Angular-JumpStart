import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated) {
        return true;
    }

    // Track URL user is trying to go to so we can send them there after logging in
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

}
