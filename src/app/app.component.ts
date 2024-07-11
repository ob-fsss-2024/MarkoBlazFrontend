import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CocktailService]
  
})
export class AppComponent implements OnInit{

  constructor(private myService:CocktailService){}

  drinks: any;

  ngOnInit() {
    this.myService.getCocktail("Mojito").subscribe(data => this.drinks = data);
    
  }
  title = 'aplication';
}