import { Component, OnInit } from '@angular/core';
import { userAdmin } from './usuariosModelsAdmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isChecked: any

  User: userAdmin = {
   username:"",
   password:""
  }
  constructor() { }

  ngOnInit(): void {
    if(localStorage.senha){
      this.User.username = localStorage.login;
      this.User.password = localStorage.senha;
    }
 
  }
  signIn(){
   if(this.isChecked === true){
      localStorage.setItem("login", this.User.username)
      localStorage.setItem("senha", this.User.password)
   }
  
  }
}
