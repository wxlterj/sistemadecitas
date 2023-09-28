import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'email': new FormControl("",Validators.required),
      'nombre': new FormControl("",Validators.required),
      'apellido': new FormControl("",Validators.required),
      'id': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'repassword': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }


// Registro de sesión
 async registrar() {
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Llene todos los datos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
      }

      var usuario = {
        email: f.email,
        nombre: f.nombre,
        apellido: f.apellido,
        id: f.id,
        password: f.password,
        repassword: f.repassword,
      }


      localStorage.setItem('usuario',JSON.stringify(usuario))

      // Declararlo como ingresado
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('home');
    }
}

