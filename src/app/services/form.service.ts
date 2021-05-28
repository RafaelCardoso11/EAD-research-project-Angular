

import { Usuario } from '../components/viewTemplates/Forms/usuario-form-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl="http://localhost:3001/usuarios";

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {

  constructor(private http: HttpClient ) { }

  newForm(usuario: Usuario): Observable<Usuario>{
   return this.http.post<Usuario>(baseUrl, usuario)
  }
  lenghtUsuarios(usuario: Usuario): Observable<Usuario>{
    return this.http.get(baseUrl)
  }
}
