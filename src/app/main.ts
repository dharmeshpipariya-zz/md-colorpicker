import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';
import { AppComponent } from './app.component';
import {routes} from './routes';
bootstrap(AppComponent, [
  provideRouter(routes),
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);