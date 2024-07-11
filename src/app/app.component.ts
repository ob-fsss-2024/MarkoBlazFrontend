// app.component.ts
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailService]
})
export class AppComponent implements OnInit {

  constructor(private myService: CocktailService) { }

  drinks: any;
  searchQuery: string = '';

  ngOnInit() {
    this.myService.getCocktail("Mojito").subscribe(data => this.drinks = data);
  }

  searchCocktail() {
    if (this.searchQuery.trim()) {
      this.myService.getCocktail(this.searchQuery).subscribe(data => this.drinks = data);
    }
  }

  title = 'application';
}
