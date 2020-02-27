import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  private dataSource ;
  colums=["nomFour","nomCourtFour","villeFour","adresseFour","telFixFour","telMobileFour","faxFour","emailFour"]
  constructor( private service : GestionService) { }

  ngOnInit() {
    this.dataSource=this.service.getAllFours();
  }

}
