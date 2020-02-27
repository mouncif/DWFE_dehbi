import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionService } from 'src/app/services/gestion.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service :GestionService) { }
  client;
  clients : Client []=[]
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomClient :new FormControl('',Validators.required),
    prenomClient : new FormControl('',Validators.required),
    statuClient :  new FormControl(''),
    villeClient : new FormControl('',Validators.required),
    adresseClient  :new FormControl('',Validators.required),
    telClient:new FormControl('',[Validators.required , Validators.minLength(8)]),
    emailClient:new FormControl('',[Validators.required , Validators.email]),
    photoClient : new FormControl(''),


  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomClient: '',
      prenomClient: '',
      statuClient: '',
      villeClient: '',
      adresseClient: '',
      telClient: '',
      emailClient: '',
      photoClient: ''
    });

}  

  ngOnInit() {
  }
  onSubmit(){
    this.client = this.form.value;
    this.service.addClient(this.client).subscribe((client)=>{
      this.clients = [client, ...this.clients];

  });
  this.initializeFormGroup();
}

}
