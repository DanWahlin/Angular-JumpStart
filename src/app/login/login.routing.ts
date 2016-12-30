import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const loginRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ LoginComponent ]
};