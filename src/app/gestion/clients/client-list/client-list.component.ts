import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ClientService } from 'src/app/services/client.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ClientComponent } from '../client/client.component';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service : ClientService,private not : MatSnackBar,private dialog : MatDialog) { }
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
  ajouter(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(ClientComponent,dialogConfig)
    //this.dataSource=this.service.getAllClients();
  }
  onEdit(row){
    this.service.fillFormGroup(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(ClientComponent,dialogConfig)
    //this.dataSource=this.service.getAllClients();
    
  }


}
