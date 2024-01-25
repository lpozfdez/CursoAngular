import { Component } from '@angular/core';
import { Subject, fromEvent, of, tap } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})

export class PadreComponent {

  //Se recibe el mensaje
  message: string = '';
  messageChild: string ='';
  //Se envia el mensaje
  messageObj = new Subject<string>();

  constructor( private msServ: MessageService ){}

  //se cambia el mensaje por input
  setMessageByInput(){
    this.message = 'EL PADRE USA UNA PROPIEDAD @INPUT';
  }

  //Se cambia el mensaje mediante observable
  setMessageByObs(){
    this.messageObj.next('EL PADRE USA UN OBSERVABLE');
  }

  //Se cambia el mensaje mediante un servicio
  setMessageByService(){
    this.message = this.msServ.getMessageByService( 'PADRE' );
  }

  //Trae el mensaje desde el hijo mediante el evento Output
  getMessageChildOutput(msg: string){
    this.messageChild = msg;
  }

  //Trae el Subject con el mensaje del hijo
  getMessageChildObs( val: string ){
    this.messageChild = val;
  }

  ///Trae el mensaje mediante uso de un servicio
  getMessageByService(msg: string){
    this.messageChild = msg;
  }


}
