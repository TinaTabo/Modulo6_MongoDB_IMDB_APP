import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "professionals", component: ProfessionalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
