import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';


const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient, private usuarioService: UsuarioService) { }    //Injeção de dependencia, a instancia é feita pelo Angular

  autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {                  //Promise "super", quando terminar retornara o objeto aqui definido na função
    return this.httpCliente.post(
      `${API}/user/login`,
      {
        userName: usuario,
        password: senha
      },
      {
        observe: 'response'      //não só o body, mas também o header
      }
    ).pipe(                     //Linka diferentes funções em uma só
      tap((res) => {            // depois da requisição for concluida (Observable) executa qualquer outra função que seja necessária
        const authToken = res.headers.get('x-access-token') ?? ''
        this.usuarioService.salvaToken(authToken)
      })
    )
  }

}
