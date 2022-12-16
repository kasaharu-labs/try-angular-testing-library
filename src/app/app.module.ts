import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyMyFormComponent } from './features/my-form/components/ly-my-form/ly-my-form.component';
import { MyFormPageComponent } from './features/my-form/pages/my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, MyFormPageComponent, LyMyFormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
