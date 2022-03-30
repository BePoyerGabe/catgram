import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (controle: AbstractControl) => {
      return controle.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.usuarioJaExiste(nomeUsuario)
        ),
        map((usuarioExiste) => (usuarioExiste ? { usuarioExstente: true } : null)),
        first()
      )
    }
  }
}
