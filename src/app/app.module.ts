import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './gestion/clients/clients.component';
import { ClientComponent } from './gestion/clients/client/client.component';
import { ClientListComponent } from './gestion/clients/client-list/client-list.component';
import { FournisseursComponent } from './gestion/fournisseurs/fournisseurs.component';
import { FournisseurComponent } from './gestion/fournisseurs/fournisseur/fournisseur.component';
import { FournisseurListComponent } from './gestion/fournisseurs/fournisseur-list/fournisseur-list.component';
import { ProduitsComponent } from './gestion/produits/produits.component';
import { ProduitComponent } from './gestion/Produits/produit/produit.component';
import { ProduitListComponent } from './gestion/Produits/produit-list/produit-list.component';
import { GestionService } from './services/gestion.service';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FournisseurService } from './services/fournisseur.service';
import { ClientService } from './services/client.service';
import { ProduitService } from './services/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    FournisseursComponent,
    FournisseurComponent,
    FournisseurListComponent,
    ProduitsComponent,
    ProduitComponent,
    ProduitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FournisseurService,ClientService,ProduitService],
  bootstrap: [AppComponent],
  entryComponents :[ClientComponent,FournisseurComponent,ProduitComponent]
})
export class AppModule { }
