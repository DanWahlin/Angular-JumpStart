import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/subscription';

import { AuthService } from '../services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../growler/growler.service';

@Component({
    moduleId: module.id,
    selector: 'cm-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    loginLogoutText: string = 'Login';
    sub: Subscription;

    constructor(private router: Router, private authservice: AuthService, private growler: GrowlerService) { }

    ngOnInit() { 
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn: boolean) => {
                this.setLoginLogoutText();
            },
            (err: any) => console.log(err));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe((status: boolean) => {
                    this.setLoginLogoutText();
                    this.growler.growl('Logged Out', GrowlerMessageType.Info);
                    this.router.navigate(['/customers']);
                    return;
                },
                (err: any) => console.log(err));
        }
        this.redirectToLogin();
    }
    
    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    }

}