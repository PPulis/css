import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { ItemsContainer } from './containers/items/items';


bootstrapApplication(ItemsContainer, appConfig)
  .catch((err) => console.error(err));
