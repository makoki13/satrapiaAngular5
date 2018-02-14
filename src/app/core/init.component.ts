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
  static nivelJugador = 2;

  constructor(private router: Router) {
    DBlocal.inicializa();

    console.log('paso 1');
    const self = this;
    DBlocal.numRegistros('usuarios_').then (
      function (numRegistros) {
        if (numRegistros > 0 ) { InitComponent.hayUsuarios = true; }


        console.log('numUsuarios', numRegistros);

        if (InitComponent.hayUsuarios === true) {
          const p2 = DBlocal.db.get('usuarios').then(function (docUsuarios) {
            console.log(docUsuarios);
            InitComponent.hayJugador = (docUsuarios.usuario !== '');
            if (InitComponent.hayJugador === true) {
              if (InitComponent.nivelJugador === 1) {
                self.router.navigate(['tutorial']);
              } else {
                self.router.navigate(['main']);
              }
          } else {
            self.router.navigate(['login']);
          }
        });
        } else {
          self.router.navigate(['register']);
        }




      });

    console.log('paso 3');
  }

  ngOnInit() {
  }

  getVersionNumber() { return InitComponent.version; }
  getNombreClaveVersion() { return InitComponent.nombreClaveVersion; }

}
