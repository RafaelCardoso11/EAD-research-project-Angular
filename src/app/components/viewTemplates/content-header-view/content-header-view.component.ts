import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-header-view',
  templateUrl: './content-header-view.component.html',
  styleUrls: ['./content-header-view.component.scss']
})
export class ContentHeaderViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToTeacherForm(){
    this.router.navigate(['formulario/professor']);
  }
  redirectToStudentForm(){
    this.router.navigate(['formulario/aluno']);
  }
}
