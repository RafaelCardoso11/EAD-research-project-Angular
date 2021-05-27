import { Usuario } from './../../templates/usuario-form-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormCreateService } from 'src/app/services/form.service';

@Component({
  selector: 'app-content-header-view',
  templateUrl: './content-header-view.component.html',
  styleUrls: ['./content-header-view.component.scss']
})
export class ContentHeaderViewComponent implements OnInit {

  usuarios: Usuario = {
    id: 10000
  }
  constructor(private router: Router, private serviceUsuarioCreate: FormCreateService) { }
  ngOnInit(): void {
  }
  lenghtUsers(){
    
  }
  redirectToTeacherForm(){
    this.router.navigate(['formulario/professor']);
  }
  redirectToStudentForm(){
    this.router.navigate(['formulario/aluno']);
  }
}
