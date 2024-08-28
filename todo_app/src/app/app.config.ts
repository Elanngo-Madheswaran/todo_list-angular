import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

console.log(environment.production); // true or false
console.log(environment.apiUrl); // 'http://my-prod-url' or 'http://my-dev-url'


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
