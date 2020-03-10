import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import { MatSnackBar } from '@angular/material';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  private dataSource ;
  colums=["nomFour","nomCourtFour","villeFour","adresseFour","telFixFour","telMobileFour","faxFour","emailFour","actions"]
  constructor( private service : 
    FournisseurService,private not : MatSnackBar) { }

  ngOnInit() {
    this.dataSource=this.service.getAllFours();
  }
  onDelete(id){
  
    if(confirm('etes vous sur ?')){
    this.service.deleteFour(id).subscribe(()=>{
      this.not.open('enregistrement supprimés','', {
        duration: 2000
      });
      this.dataSource=this.service.getAllFours();
    });
    }
  }
}
