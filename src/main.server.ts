import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './core/app';
import { config } from './core/app-server.config';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
