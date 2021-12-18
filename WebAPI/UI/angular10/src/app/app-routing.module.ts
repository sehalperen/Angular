import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DetailsComponent} from './details/details.component';
import {CustomerpersComponent} from './customerpers/customerpers.component';

const routes: Routes = [
  {path:'details',component:DetailsComponent},
  {path:'customers',component:CustomerpersComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
