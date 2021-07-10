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
import { ContentGoalsResearchComponent } from './components/viewTemplates/content-goals-research/content-goals-research.component';
import { SectionCommentsComponent } from './components/viewTemplates/section-comments/section-comments.component';
import { ContentResultGeneralResearchComponent } from './components/viewTemplates/content-result-general-research/content-result-general-research.component';
import { ContentResultDocentesResearchComponent } from './components/viewTemplates/content-result-docentes-research/content-result-docentes-research.component';
import { ContentResultDiscentesResearchComponent } from './components/viewTemplates/content-result-discentes-research/content-result-discentes-research.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentHeaderViewComponent,
    ContentMoreAboutResearchViewComponent,
    ContentGoalsResearchComponent,
    SectionCommentsComponent,
    ContentResultGeneralResearchComponent,
    ContentResultDocentesResearchComponent,
    ContentResultDiscentesResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
