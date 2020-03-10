import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/Client';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url ="http://localhost:3000/clients";
  constructor(private http : HttpClient) { }


  getAllClients(){
    return this.http.get<Client[]>(this.url);
  }
  addClient(c){
    return this.http.post<Client>(this.url,c);
  }
  deleteClient(id){
    return this.http.delete(`${this.url}/${id}`);
  }
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

}
