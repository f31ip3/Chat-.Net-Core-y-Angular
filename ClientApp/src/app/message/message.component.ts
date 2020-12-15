import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})

export class MessageComponent {
  //Le indica a angular que bamos a recivir un dato como entrada siempre y cuando agreges agreges Input a un lado de Component
  @Input() oMessage: Message;
}


// voy a agregarlo al archivo ts que cree para unificarlo como un moldesito
//interface Message {
//  Id: number,
//  Name: string,
//  Message: string;
//}
