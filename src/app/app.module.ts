import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
