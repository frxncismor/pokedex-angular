import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  isTyping: boolean = false;
  pokemonSearched: string = '';
  sortBy: string = '';
  openSort: boolean = false;
  pokemons: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.fetchPokemons();
  }

  search(target: any): void {
    this.isTyping = true;
    console.log(target.value);
  }

  cancelSearch() {
    this.pokemonSearched = '';
    this.isTyping = false;
  }

  sort() {
    if (this.openSort === true) {
      this.openSort = false;
    } else {
      this.openSort = true;
    }
  }

  // fetchPokemons() {
  //   this.dataService.getAllPokemons().subscribe(result => {
  //     console.log(result)
  //   });
  // }
}
