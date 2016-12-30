import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { loginRouting } from './login.routing';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, loginRouting.routes ],
  exports: [ CommonModule, loginRouting.components ],
  declarations: [ loginRouting.components ]
})
export class LoginModule { }