import { HttpClient } from '@angular/common/http';
import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { importProvidersFrom } from "@angular/core";
import { provideRouter } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { appRoutes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClient),
    provideRouter(appRoutes),
    importProvidersFrom(LayoutModule),
  ]
});