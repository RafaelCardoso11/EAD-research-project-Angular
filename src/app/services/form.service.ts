import { Usuario } from '../components/templates/Forms/usuario-form-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {
  baseUrl = "http://localhost:3001/usuarios";

  constructor(private http: HttpClient ) { }

  newForm(usuario: Usuario): Observable<Usuario>{
   return this.http.post<Usuario>(this.baseUrl, usuario)
  }
  lenghtUsuarios(usuario: Usuario): Observable<Usuario>{
    return this.http.get(this.baseUrl)
  }
}
