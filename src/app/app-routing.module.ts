import { TeacherFormComponent } from './components/templates/teacher-form/teacher-form.component';
import { StudentFormComponent } from './components/templates/student-form/student-form.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "formulario/professor",
    component: StudentFormComponent
  }
  ,
  {
    path: "formulario/aluno",
    component: TeacherFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
