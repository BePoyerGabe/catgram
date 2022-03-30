import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httoClient: HttpClient) { }

  cadastraNovoUsuario(usuario: NovoUsuario) {
    return this.httoClient.post('http://localhost:3000/user/signup', usuario)
  }

  usuarioJaExiste(nome: string) {
    return this.httoClient.get(`http://localhost:3000/user/exists/${nome}`)
  }
}
