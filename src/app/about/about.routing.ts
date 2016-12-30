import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: 'about', component: AboutComponent }
];

export const aboutRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ AboutComponent ]
};