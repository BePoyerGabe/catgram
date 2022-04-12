import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httoClient: HttpClient) { }

  cadastraNovoUsuario(usuario: NovoUsuario) {
    return this.httoClient.post(`${API}/user/signup`, usuario)
  }

  usuarioJaExiste(nome: string) {
    return this.httoClient.get(`${API}/user/exists/${nome}`)
  }
}
