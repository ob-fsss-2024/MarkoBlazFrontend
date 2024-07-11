import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit{

  constructor(private httpClient:HttpClient){}

  drinks: any;

  ngOnInit() {
    this.httpClient.get("http://localhost:9090/coctails?coctailName=Mojito").subscribe(data => this.drinks = data);
    
  }
  title = 'aplication';
}
