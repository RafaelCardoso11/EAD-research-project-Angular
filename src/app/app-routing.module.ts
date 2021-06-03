import { LoginViewContentComponent } from './panel-admin-dashboard/components/viewTemplates/login-view-content/login-view-content.component';
import { ViewComponent } from './panel-admin-dashboard/components/viewDashboard/view.component';

import { TeacherFormComponent } from './components/viewTemplates/Forms/teacher-form/teacher-form.component';
import { StudentFormComponent } from './components/viewTemplates/Forms/student-form/student-form.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishFormComponent } from './components/viewTemplates/finish-form/finish-form.component';

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "formulario/professor",
    component: TeacherFormComponent
  }
  ,{
    path: "formulario/aluno",
    component: StudentFormComponent
   },
  {
    path: "formulario/finish/form",
    component: FinishFormComponent
  },
  {
    path: "admin/login",
    component: LoginViewContentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
