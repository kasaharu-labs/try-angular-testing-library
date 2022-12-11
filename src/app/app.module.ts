import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormPageComponent } from './features/my-form/pages/my-form/my-form.component';
import { LyMyFormComponent } from './features/my-form/components/ly-my-form/ly-my-form.component';

@NgModule({
  declarations: [AppComponent, MyFormPageComponent, LyMyFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
