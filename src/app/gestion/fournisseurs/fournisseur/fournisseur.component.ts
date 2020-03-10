import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionService } from 'src/app/services/gestion.service';
import { Fournissuer } from 'src/app/models/Fournissuer';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
private fournissuer;
private fournissuers :Fournissuer []=[]
  constructor(private service: FournisseurService) { }
  
  ngOnInit() {
  }
  onSubmit(){
    this.fournissuer = this.service.form.value;
    this.service.addFour(this.fournissuer).subscribe((fournisseur)=>{
      this.fournissuers = [fournisseur, ...this.fournissuers];

  });
  this.service.initializeFormGroup();
}

}
