import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { ValidationService } from '../core/services/validation.service';
import { IUserLogin } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';
import { LoggerService } from '../core/services/logger.service';

@Component({
    selector: 'cm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = {} as FormGroup;
    errorMessage: string = '';
    isLoading: boolean = false;
    get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
    }

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private growler: GrowlerService,
                private logger: LoggerService) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email:      ['', [ Validators.required, ValidationService.emailValidator ]],
            password:   ['', [ Validators.required, ValidationService.passwordValidator ]]
        });
    }

    submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        this.isLoading = true;
        this.errorMessage = '';
        this.authService.login(value)
            .subscribe((status: boolean) => {
                this.isLoading = false;
                if (status) {
                    this.growler.growl('Logged in', GrowlerMessageType.Info);
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        this.authService.redirectUrl = '';
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
            (err: any) => {
                this.isLoading = false;
                this.logger.log(err);
            });
    }

}
