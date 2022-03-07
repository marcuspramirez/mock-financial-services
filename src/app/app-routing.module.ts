import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdsComponent } from './cds/cds.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {path: "cds", component: CdsComponent},
  {path: "", component: HomePageComponent},
  {path: "members", component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
