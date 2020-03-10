import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import { MatSnackBar } from '@angular/material';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service : ClientService,private not : MatSnackBar) { }
  private dataSource ;
  colums=["id","nomClient","prenomClient","statuClient","villeClient","adresseClient","telClient","emailClient","actions"]
  ngOnInit() {
    this.dataSource=this.service.getAllClients();
  }
  onDelete(id){
  
    if(confirm('etes vous sur ?')){
    this.service.deleteClient(id).subscribe(()=>{
      this.not.open("enregistrement supprimés",'', {
        duration: 2000
      });
      this.dataSource=this.service.getAllClients();
    });
    }
  }


}
