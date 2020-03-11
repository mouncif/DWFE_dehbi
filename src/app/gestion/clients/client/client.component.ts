import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionService } from 'src/app/services/gestion.service';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';
import { MatDialogRef } from '@angular/material';
 

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service :ClientService,public dialogRef: MatDialogRef<ClientComponent>) { }
  client;
  clients : Client []=[]
  
  ngOnInit() {
  }
  onSubmit(){
    
    if (!this.service.form.get("id").value){
      this.client = this.service.form.value;
      this.service.addClient(this.client).subscribe((client)=>{
        this.clients = [client, ...this.clients];
        
    });
    }
    else {
      this.client = this.service.form.value;
      this.service.updateClient(this.client).subscribe((client)=>{
        this.clients = [client, ...this.clients];
        
    });
    //window.location.reload();
    }
  this.service.form.reset()
  this.service.initializeFormGroup();
  this.dialogRef.close();
  window.location.reload();
  
}
onClose(){
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close();
}

}
