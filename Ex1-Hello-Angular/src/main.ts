import { bootstrapApplication } from '@angular/platform-browser'; // Import the bootstrap function from Angular platform-browser
import { appConfig } from './app/app.config'; // Import application configuration
import { App } from './app/app'; // Import the root component

bootstrapApplication(App, appConfig) // Bootstrap the Angular application
  .catch((err) => console.error(err)); // Log any errors during bootstrap
