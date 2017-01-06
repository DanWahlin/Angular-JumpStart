import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { ValidationService } from '../core/services/validation.service';
import { IUserLogin } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
    moduleId: module.id,
    selector: 'cm-login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder, 
                private router: Router, 
                private authservice: AuthService,
                private growler: GrowlerService) { }

    ngOnInit() { 
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email:      ['', [ Validators.required, ValidationService.emailValidator ]],
            password:   ['', [ Validators.required, ValidationService.passwordValidator ]]
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
                    this.growler.growl(loginError, GrowlerMessageType.Danger);
                }
            },
            (err: any) => console.log(err));
    }

}