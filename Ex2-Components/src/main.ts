import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './containers/app/app.config';
import { App } from './containers/app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
