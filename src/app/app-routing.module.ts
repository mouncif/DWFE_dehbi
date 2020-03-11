import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './gestion/Produits/produit-list/produit-list.component';
import { FournisseurComponent } from './gestion/fournisseurs/fournisseur/fournisseur.component';
import { FournisseurListComponent } from './gestion/fournisseurs/fournisseur-list/fournisseur-list.component';
import { ClientListComponent } from './gestion/clients/client-list/client-list.component';
import { ProduitsComponent } from './gestion/produits/produits.component';


const routes: Routes = [
  {path:"", component:ProduitsComponent},
  {path:"produits", component:ProduitListComponent},
  {path:"fournisseurs", component:FournisseurListComponent},
  {path:"clients", component:ClientListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

  
}
