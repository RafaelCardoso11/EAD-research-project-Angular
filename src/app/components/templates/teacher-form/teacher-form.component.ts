import { FormCreateService } from '../../../services/form.service';
import { Usuario } from './../usuario-form-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    presidente: ''
  }
  constructor(private serviceUsuarioCreate: FormCreateService, private router: Router) { }

  ngOnInit(): void {
  }
  createNewForm(){
    this.serviceUsuarioCreate.newForm(this.usuario).subscribe(() => {
      this.router.navigate(['formulario/finish/form'])
    })
  }
}
