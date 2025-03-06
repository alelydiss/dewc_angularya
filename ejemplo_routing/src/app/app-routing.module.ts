import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listadoproductos', component: ListadoproductosComponent},
  {path: 'listadoclientes', component: ListadoclientesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
