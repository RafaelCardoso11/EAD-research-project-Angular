import { Usuario } from '../components/templates/Forms/usuario-form-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const { baseUrl } = require('./.env')

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
