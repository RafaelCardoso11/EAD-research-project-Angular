import { Usuario } from '../../src/app/components/templates/Forms/usuario-form-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const { baseUrl } = require('./.env')


export class Dice{
     constructor(private http: HttpClient){
     }
     collectDice() : Observable<Usuario[]>{
         return this.http.get<Usuario[]>(baseUrl)
     }
}


