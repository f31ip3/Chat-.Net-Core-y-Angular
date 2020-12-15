import { Component,Inject,ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../service/chat.service';
import { Message } from '../Interfaces';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

//ViewChild, ElementRef son dos referencias nuevas que agrego para que mi boton no se quede enviando

@Component({ 
  selector: 'chat-app',
  templateUrl: "./chat.component.html"
}) 

export class ChatComponent {
  //realisamos una lista de un arreglo de string
  public lstMessages: Observable<Message[]>; 

  //Nota es mejor trabajar con formcontrol ya que te pueda ayudar a validar una cadena de caracteres o todo lo que le pongas
  nameControl = new FormControl('');
  textControl = new FormControl('');
  @ViewChild('text') text: ElementRef;//creo mi nueva variable y lo mando a chat.component

  //creo mi constructor para realizar la solicitud a mi chatControler
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    protected chatService: ChatService)
    {
      this.GetInfo();
      //es para recivir un objeto despues lo mandamos a el servicio con programacion reactiva en chat.service en un metodo
      //http.get<Message[]>(baseUrl + "api/Chat/Message").subscribe(result => {
      //  this.lstMessages = result;
      //}, error => console.error(error));
    }
      
  public GetInfo() {
  this.lstMessages =  this.chatService.GetMessage();
  }

  public SendMessag() {
    //mandamos a invocar el servicio inyectado y el metodo Add(name, text) que viene de chat.service.ts
    this.chatService.Add(this.nameControl.value, this.textControl.value);

    setTimeout(() => {
      this.GetInfo();
    },300)

    //una ves que se termine la insercion  aremos que se borre
    this.textControl.setValue('');
    this.text.nativeElement.focus();
  }

}






//definimos nuestro objeto
//interface Message {
//  Id: number,
//  Name: string,
//  Message: string;
//}

