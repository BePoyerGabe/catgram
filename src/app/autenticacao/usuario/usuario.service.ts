import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  /**
   * Subject é um observable que permite não só pegar informações mas também enviar informações
   * como um contexto em react
   * 
   * Behavior - todo componente/serviço que subscribe nesse subject ele envia o ultimo valor dele (guarda o estado)
   */
  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) {
    if (tokenService.possuiToken()) {
      this.decodificaJWT()
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken()
    const usuario = jwtDecode(token) as Usuario

    //atualiza o subject através da função next
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario() {
    // envia como Observable pois somente esse serviço conseguirá modificar o subject
    return this.usuarioSubject.asObservable()
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token)
    this.decodificaJWT()
  }

  logout() {
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

  isLogged() {
    return this.tokenService.possuiToken()
  }
}
