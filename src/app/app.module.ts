import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { CdsComponent } from './cds/cds.component';
import { OtherServicesTextComponent } from './other-services-text/other-services-text.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ImageCardComponent,
    HomePageComponent,
    NavbarComponent,
    ServiceCardsComponent,
    MissionStatementComponent,
    CdsComponent,
    OtherServicesTextComponent,
    FooterComponent,
    UserInfoComponent,
    MembersComponent,
    
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
