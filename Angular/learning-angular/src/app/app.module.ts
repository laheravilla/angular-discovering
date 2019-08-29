import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar para los forms
import { routing, appRoutingProviders } from './app.routing'; // Import my routes
import { HttpClientModule } from '@angular/common/http'; // Para trabajar con AJAX
import { CalculatricePipe } from './pipes/calculatrice.pipe'; // Pipe

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components
import { VideogameComponent } from './videogame/videogame.component';
import { ProgrammingLanguageComponent } from './programming_language/programming_language.component';
import { FrameworkComponent } from './framework/framework.component';
import { ComputerComponent } from './computer/computer.component';
import { HomeComponent } from './home/home.component';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent, // Cargar modulo VideogamesComponent
    ProgrammingLanguageComponent,
    FrameworkComponent,
    ComputerComponent,
    HomeComponent,
    ExternalComponent,
    CalculatricePipe, // Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Cargar modulo de form
    routing, // Load all routes
    HttpClientModule // AJAX
  ],
  providers: [
    appRoutingProviders // Load routes providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
