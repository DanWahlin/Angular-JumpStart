import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { loginRouting } from './login.routing';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, loginRouting.routes ],
  exports: [ loginRouting.components ],
  declarations: [ loginRouting.components ]
})
export class LoginModule { }