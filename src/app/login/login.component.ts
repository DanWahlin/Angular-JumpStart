import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/auth.service';
import { ValidationService } from '../core/validation.service';
import { IUserLogin } from '../shared/interfaces';
import { GrowlerComponent, GrowlMessageType } from '../growler/growler.component';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;
    @ViewChild(GrowlerComponent) growler: GrowlerComponent;

    constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService) { }

    ngOnInit() { 
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email:      ['', [ Validators.required, ValidationService.emailValidator ]],
            password:   ['', Validators.required ]
        });
    }

    submit({ userLogin, valid }: { userLogin: IUserLogin, valid: boolean }) {
        this.authservice.login(userLogin)
            .subscribe((status: boolean) => {
                if (status) {
                    if (this.authservice.redirectUrl) {
                        const redirectUrl = this.authservice.redirectUrl;
                        this.authservice.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    } else {
                        this.router.navigate(['/customers']);
                    }
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                    this.growler.growl(loginError, GrowlMessageType.Danger);
                }
            },
            (err: any) => console.log(err));
    }

}