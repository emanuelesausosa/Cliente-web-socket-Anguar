import { Component, OnInit } from "@angular/core";
import { SocketServiceService } from "../../shared/services/socket-service.service";
@Component({
  selector: "csk-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private sockerSrv: SocketServiceService) {}

  ngOnInit() {
    this.initSocketService();
  }

  initSocketService(): void {
    // inicializar el socket service
    this.sockerSrv.initSocket();

    // connect to server socket
    this.sockerSrv.onConnect().subscribe(data => {
      console.log("Conectando...");
    });
  }
}
