import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    public http:HttpClient
  ) { }

PegaCep(cep:string){
 var local:string = "http://viacep.com.br/ws/"+cep+"/json/";
return this.http.get(local)
 }
}
