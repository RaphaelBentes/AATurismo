import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { RoteiroComponent } from './roteiro/roteiro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'roteiro/:id/:title', component: RoteiroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
