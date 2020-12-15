import { Injectable, Inject } from '@angular/core';
import { Message, MyResponse } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//estos headers van ha ahcer utiles cuando agamos la solicitud post
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  public algo: string = "Hola mundo";
  baseUrl: string;

  //aqui se realizo la inyeccion de dependencias
  constructor(protected http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  //Este Servicio me regresa un areglo de message de mi solicitud get
  public GetMessage(): Observable<Message[]> {
    
    return this.http.get<Message[]>(this.baseUrl+"api/Chat/Message");
  }
  //Este es mi solicitud post
  public Add(name, text)
    {   //Aqui realizamos la solicitud
        this.http.post<MyResponse>(this.baseUrl + "api/Chat/Add", { 'Name': name, 'Text': text }, httpOptions).
          subscribe(//aqui verificamos si hay algo mal mandamos el error
                     result => { console.log(result);},
                      error =>   console.error(error)
                   );//terminando de realizar la solicitud lo mandamos llamar a mi chat.component
    }
}

