import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormPageComponent } from './features/my-form/pages/my-form/my-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-form', pathMatch: 'full' },
  { path: 'my-form', component: MyFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
