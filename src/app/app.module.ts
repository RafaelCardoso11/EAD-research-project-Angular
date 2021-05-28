import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { ContentHeaderViewComponent } from './components/viewTemplates/content-header-view/content-header-view.component';
import { ContentMoreAboutResearchViewComponent } from './components/viewTemplates/content-more-about-research-view/content-more-about-research-view.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { TeacherFormComponent } from './components/viewTemplates/Forms/teacher-form/teacher-form.component';
import { StudentFormComponent } from './components/viewTemplates/Forms/student-form/student-form.component';
import { CommentsUserBannerComponent } from './components/templates/comments-user-banner/comments-user-banner.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ViewComponent } from './panel-admin-dashboard/components/view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentHeaderViewComponent,
    ContentMoreAboutResearchViewComponent,
    PageHomeComponent,
    TeacherFormComponent,
    StudentFormComponent,
    CommentsUserBannerComponent,
    ViewComponent
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
