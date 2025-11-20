import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductList } from './product-list/product-list';

bootstrapApplication(ProductList, appConfig)
  .catch((err) => console.error(err));
