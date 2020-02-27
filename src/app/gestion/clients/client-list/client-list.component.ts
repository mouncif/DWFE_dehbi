import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service : GestionService) { }
  private dataSource ;
  colums=["nomClient","prenomClient","statuClient","villeClient","adresseClient","telClient","emailClient"]
  ngOnInit() {
    this.dataSource=this.service.getAllClients();
  }

}
