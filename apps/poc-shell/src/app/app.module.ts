import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@nx-poc/ui';
import { PluginProxyComponent } from './services/plugins/plugin-proxy.component';
@NgModule({
  declarations: [AppComponent, PluginProxyComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
