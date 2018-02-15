import { DBlocal } from './../shared/Persistencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sat-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  static version = '0.0.1';
  static nombreClaveVersion = 'Ra';

  static hayUsuarios = false;
  static hayJugador = true;
  static nivelJugador = 1;

  constructor(private router: Router) {
    DBlocal.inicializa();

    const self = this;
    DBlocal.numRegistros('usuarios_').then (
      function (numRegistros) {
        if (numRegistros > 0 ) {
          InitComponent.hayUsuarios = true;
          DBlocal.numRegistros('jugador').then (
            function (numJugadores) {
              if (numJugadores > 0) {
                InitComponent.hayJugador = true;
                DBlocal.getRegistro('jugador').then ( function ( registroJugador ) {
                  const usuario = registroJugador.usuario;
                  DBlocal.getRegistro('usuarios_' + usuario).then ( function ( fichaJugador ) {
                    InitComponent.nivelJugador =  fichaJugador.nivel;
                    if (InitComponent.nivelJugador === 1) {
                      self.router.navigate(['tutorial']);
                    } else {
                      self.router.navigate(['main']);
                    }
                  });
                });
              }else  {
                self.router.navigate(['login']);
              }
            }).catch( function() {
              self.router.navigate(['login']);
            });
        } else {
          self.router.navigate(['register']);
        }
      }).catch ( function () {
        self.router.navigate(['register']);
      });
  }

  ngOnInit() {
  }

  getVersionNumber() { return InitComponent.version; }
  getNombreClaveVersion() { return InitComponent.nombreClaveVersion; }

}
