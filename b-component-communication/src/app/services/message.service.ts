import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessageByService( elem: string ): string{
    return `EL ${elem} USA UN SERVICIO`;
  }

}
