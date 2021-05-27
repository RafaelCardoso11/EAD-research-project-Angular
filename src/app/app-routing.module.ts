
import { TeacherFormComponent } from './components/templates/Forms/teacher-form/teacher-form.component';
import { StudentFormComponent } from './components/templates/Forms/student-form/student-form.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishFormComponent } from './components/templates/finish-form/finish-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
