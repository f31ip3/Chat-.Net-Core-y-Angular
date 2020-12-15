//una ves creado el post en net cor y probarlo realizaremos la interface
export interface Message {
  Id: number,
  Name: string,
  Message: string;
}

export interface MyResponse {
  Success: number,  //que number es entero
  Data: any,  //any ago referencia a cualquier cosa aunque lo tenga representado en net core como un objeto
  Message: string 
}//despues vamos a agregar un nuevo servicio chat.service
