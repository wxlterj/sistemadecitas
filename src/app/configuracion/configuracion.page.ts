import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(public navCtrl: NavController ) {}

  ngOnInit() {
  }

  salir() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }

}
