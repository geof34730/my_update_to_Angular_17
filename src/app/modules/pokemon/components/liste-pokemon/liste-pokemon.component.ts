import { Component,OnInit } from '@angular/core';
import {BorderCardDirective} from "../../directives/border-card.directive";
import {DatePipe, NgForOf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import PokemonModel from "../../models/pokemon.model";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import ModelPokemon from "../../models/pokemon.model";


@Component({
  selector: 'app-liste-pokemon',
  standalone: true,
 // providers:  [ PokemonService ],
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    PokemonTypeColorPipe
  ],
  templateUrl: './liste-pokemon.component.html',
  styleUrl: './liste-pokemon.component.css'
})

export class ListePokemonComponent implements OnInit{
  pokemonList :ModelPokemon[];
  constructor(
    private router: Router,
    private pokemonService : PokemonService
  ){}

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemonFiche(pokemon:ModelPokemon){
    this.router.navigate([`/pokemons/${pokemon.id}`])
  }
  deletePokemon(pokemon:ModelPokemon){
    this.pokemonService.deletePokemonById(pokemon).subscribe(() => {
      this.ngOnInit();
    })
  }

  goCreatePokemon(){
    console.log('goCreatePokemon')
    this.router.navigate([`/pokemons/create`])

  }


}
