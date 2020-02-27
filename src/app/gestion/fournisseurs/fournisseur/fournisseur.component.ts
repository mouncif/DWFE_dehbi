import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionService } from 'src/app/services/gestion.service';
import { Fournissuer } from 'src/app/models/Fournissuer';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
private fournissuer;
private fournissuers :Fournissuer []=[]
  constructor(private service: GestionService) { }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomFour :new FormControl('',Validators.required),
    nomCourtFour : new FormControl('',Validators.required),
    villeFour :  new FormControl('',Validators.required),
    adresseFour : new FormControl('',Validators.required),
    telFixFour  :new FormControl('',[Validators.required , Validators.minLength(8)]),
    telMobileFour:new FormControl('',[Validators.required , Validators.minLength(8)]),
    faxFour:new FormControl('',[Validators.required , Validators.minLength(8)]),
    emailFour : new FormControl('',[Validators.required,Validators.email]),


  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomFour: '',
      nomCourtFour: '',
      villeFour: '',
      adresseFour: '',
      telFixFour: '',
      telMobileFour: '',
      faxFour: '',
      emailFour: ''
    });

}  
  ngOnInit() {
  }
  onSubmit(){
    this.fournissuer = this.form.value;
    this.service.addFour(this.fournissuer).subscribe((fournisseur)=>{
      this.fournissuers = [fournisseur, ...this.fournissuers];

  });
  this.initializeFormGroup();
}

}
