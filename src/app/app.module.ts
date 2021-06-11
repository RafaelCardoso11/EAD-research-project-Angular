import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { ContentHeaderViewComponent } from './components/viewTemplates/content-header-view/content-header-view.component';
import { ContentMoreAboutResearchViewComponent } from './components/viewTemplates/content-more-about-research-view/content-more-about-research-view.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentHeaderViewComponent,
    ContentMoreAboutResearchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
