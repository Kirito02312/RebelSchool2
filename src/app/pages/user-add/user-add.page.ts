import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import {UserServiceService} from '../../services/user-service.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})

export class UserAddPage implements OnInit {

  user : User = new User;
  constructor(private storage: Storage,
  public alertController: AlertController) { }
  public userService: UserServiceService

  ngOnInit() {
  }

  buscaCEP(){
this.userService.PegaCep(this.user.cep).subscribe(
  res => {

  },
  error=>{
    
    }
  )
}


  salvar(){
    try{
    console.log('Dados Salvos...', this.user);
    this.storage.set('nome', this.user.nome);
    this.storage.set('email', this.user.email);
    this.storage.set('senha', this.user.senha);
    console.log('Dados salvos com sucesso...',this.user);
    this.presentAlert()
  } catch (error) {
//console.error("Erro ao salvar.", error);
  }

}
  presentAlert() {
    throw new Error('Method not implemented.');
  }

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'alerta',
    message: 'Usuário cadastrado com Sucesso!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}
}

