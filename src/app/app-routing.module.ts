import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdsComponent } from './cds/cds.component';

const routes: Routes = [{path: "cds", component: CdsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
