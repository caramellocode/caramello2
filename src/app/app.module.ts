import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Achten Sie darauf, den korrekten Pfad zu verwenden

@NgModule({
  declarations: [
    // Komponenten, die hier deklariert werden
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Importieren Sie das Routing-Modul hier
  ],
  providers: [],
  bootstrap: [/* Hauptkomponente */]
})
export class AppModule { }

