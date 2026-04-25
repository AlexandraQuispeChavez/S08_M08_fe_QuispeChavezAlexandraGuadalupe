import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CrudBandasComponent } from './components/crud-bandas/crud-bandas.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'crud', component: CrudBandasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }