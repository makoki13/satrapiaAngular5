import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InitComponent } from '../init.component';

@Component({
  selector: 'sat-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('imgNombre') imgNombre: ElementRef;

  @ViewChild('email') email: ElementRef;

  private nombreValido = false;
  private correoValido = true;
  private jugadorValido = true;
  private claveValida = true;
  private claveConfirmadaValida = true;

  private imagenInicial = '../../../assets/no.png';

  constructor() { }

  ngOnInit() {
    this.nombre.nativeElement.focus();
    this.imgNombre.nativeElement.src = this.imagenInicial;
  }

  registra() {
    // alert('En obras');
    InitComponent.gotoLogin();
  }

  controlNameKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.email.nativeElement.focus();
    }
    // alert(this.nombre.nativeElement.value.length);
  }

  testNombre() {
    if (this.nombre.nativeElement.value.length < 3) {
      this.imgNombre.nativeElement.src = '../../../assets/no.png';
      this.nombreValido = false;
    } else {
      this.imgNombre.nativeElement.src = '../../../assets/si.png';
      this.nombreValido = true;
    }
    this.verificaFormulario();
  }

  private verificaFormulario() {
    return (this.nombreValido && this.correoValido && this.jugadorValido && this.claveValida &&
      this.claveConfirmadaValida);
  }

}
