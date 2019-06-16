import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import * as io from "socket.io-client";

const urlBase = environment.baseApi;

@Injectable({
  providedIn: "root"
})
export class SocketServiceService {
  private socket: any;

  constructor() {}

  // metodo init ()
  public initSocket(): void {
    this.socket = io(urlBase);
  }

  // evento connect
  public onConnect(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("connect", () => {
        console.log("Estamos conectados");
        observer.next();
      });
    });
  }
}
