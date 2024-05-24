import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListePokemonComponent} from "./components/liste-pokemon/liste-pokemon.component";
import {FichePokemonComponent} from "./components/fiche-pokemon/fiche-pokemon.component";
import {EditPokemonComponent} from "./components/edit-pokemon/edit-pokemon.component";
import {CreatePokemonComponent} from "./components/create-pokemon/create-pokemon.component";

export const routesPokemons: Routes = [
  {path: "pokemons", component: ListePokemonComponent},
  {path: "pokemons/create", component: CreatePokemonComponent},
  {path: "pokemons/:id", component: FichePokemonComponent},
  {path: "pokemons/edit/:id", component: EditPokemonComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPokemons),
  ],
})
export class PokemonModule { }
