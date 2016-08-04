import {RouterConfig} from '@angular/router';

import { HomeComponent } from '../home/home.component';

export const routes: RouterConfig = [
  { path: '', pathMatch: 'full', component: HomeComponent },
];