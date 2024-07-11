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
  drinks: any;
  recipeResponse: any;
  searchQuery: string = '';
  moodQuery: string = '';

  constructor(private myService: CocktailService) { }

  ngOnInit() {
    this.searchCocktail("Margarita"); // Optional initial search
  }

  searchCocktail(query: string) {
    if (query.trim()) {
      this.myService.getCocktail(query).subscribe(data => {
        this.drinks = data;
        this.addFunFacts();  // Add Fun Facts after fetching the cocktail
      });
    }
  }

  searchCocktailByMood() {
    if (this.moodQuery.trim()) {
      this.myService.getCocktailRecipe(this.moodQuery).subscribe(data => {
        this.drinks = data;

      });
    }
  }

  scrollToDrink(drinkId: string) {
    const element = document.getElementById('drink-' + drinkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  addFunFacts() {
    if (this.drinks && this.drinks.drinks) {
      this.drinks.drinks.forEach((drink: any) => {
        this.myService.getCocktailFunFact(drink.strDrink).subscribe(funFactData => {
          drink.funFact = funFactData?.funFact || 'No fun fact available.';
        });
      });
    }
  }
}
