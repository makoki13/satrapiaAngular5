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
    if (InitComponent.hayUsuarios === true) {
      if (InitComponent.hayJugador === true) {
          if (InitComponent.nivelJugador === 1) {
            this.router.navigate(['tutorial']);
          } else {
            this.router.navigate(['main']);
          }
      } else {
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['register']);
    }
  }

  ngOnInit() {
  }

  getVersionNumber() { return InitComponent.version; }
  getNombreClaveVersion() { return InitComponent.nombreClaveVersion; }

}
