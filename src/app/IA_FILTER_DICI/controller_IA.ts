import { Usuario } from '../components/templates/Forms/usuario-form-model';
import { HttpClient } from '@angular/common/http';
import { Dice } from './controllers/getDice.IA';
const { baseUrl } = require('./.env')


class controller{
    dicesUsers?: Usuario[]
    dicesName?: number
     constructor(private http: HttpClient, private dice: Dice){
     }
     getName(){
         return this.dice.collectDice().subscribe(dicesUsers => {
            for(let i = 0; i < dicesUsers.length; i++){
                 this.dicesName = i;
            }
         })
       
     }
}



