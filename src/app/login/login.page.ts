import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController, 
    public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

  // Validación de credenciales en inicio de sesión
  async ingresar() {
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.email == f.email && usuario.password == f.password) {
      // Declararlo como ingresado
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('home');
      } else {
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Llene todos los datos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
      }
    }
  }
}
