import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/Client';
import { Fournissuer } from '../models/Fournissuer';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private url ;
  constructor(private http : HttpClient) {}

  getAllClients(){
    this.url ='http://localhost:3000/clients';
    return this.http.get<Client[]>(this.url);
  }
  addClient(c){
    this.url ='http://localhost:3000/clients';
    return this.http.post<Client>(this.url,c);
  }
  getAllFours(){
    this.url ='http://localhost:3000/fournissuers';
    return this.http.get<Client[]>(this.url);
  }
  addFour(f){
    this.url ='http://localhost:3000/fournissuers';
    return this.http.post<Fournissuer>(this.url,f);
  }
  



}
