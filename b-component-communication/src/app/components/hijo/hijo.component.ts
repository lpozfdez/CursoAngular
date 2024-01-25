import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit{
  //Se recibe el mensaje
  @Input() public messageParent: string = '';
  @Input() public messageParentObs = new Subject<string>();

  //Se envia del mensaje
  @Output() public messageToParent = new EventEmitter<string>();
  @Output() public messageChildObs = new Subject<string>();
  @Output() public messageChildOutput = new EventEmitter<string>();

  constructor( private mService: MessageService ){}

  ngOnInit(): void {
    this.messageParentObs.subscribe( msg => this.messageParent = msg );
  }


  //Se cambia el mensaje mediante un evento Output
  setMessageEmit(){
    this.messageChildOutput.emit( 'EL HIJO USA UN EVENTO @OUTPUT' );
  }

  //Se cambia el mensaje mediante Subject
  setMessageByObs(){
    this.messageChildObs.next( 'EL HIJO USA UN OBSERVABLE' );
  }

  setMessageByService(){
    this.messageToParent.emit(  this.mService.getMessageByService( 'HIJO' ));
  }
}
