import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GrowlerModule } from '../growler/growler.module';
import { loginRouting } from './login.routing';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, loginRouting.routes, GrowlerModule ],
  exports: [ CommonModule, loginRouting.components ],
  declarations: [ loginRouting.components ]
})
export class LoginModule { }