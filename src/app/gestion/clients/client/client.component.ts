import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionService } from 'src/app/services/gestion.service';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service :ClientService) { }
  client;
  clients : Client []=[]
  
  ngOnInit() {
  }
  onSubmit(){
    this.client = this.service.form.value;
    this.service.addClient(this.client).subscribe((client)=>{
      this.clients = [client, ...this.clients];

  });
  this.service.initializeFormGroup();
}

}
