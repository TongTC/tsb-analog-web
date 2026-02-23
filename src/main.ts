import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { App } from './app/app';
import { appConfig } from './app/app.config';
// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

bootstrapApplication(App, appConfig);
