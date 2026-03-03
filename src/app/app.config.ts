import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor,withDebugRoutes } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';

export const appConfig: ApplicationConfig = {
  providers: [
    provideContent(withMarkdownRenderer()),
    provideBrowserGlobalErrorListeners(),
    provideFileRouter(withDebugRoutes()),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor])
    ),
    provideClientHydration(withEventReplay()),
  ],
};


