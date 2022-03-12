import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient) { }                      //Injeção de dependencia, a instancia é feita pelo Angular

  autentica(usuario: string, senha: string): Observable<any> {          //Promise "super", quando terminar retornara o objeto aqui definido na função
    return this.httpCliente.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha
    })
  }
}
