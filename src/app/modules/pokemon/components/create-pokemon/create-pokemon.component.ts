import {Component, OnInit} from '@angular/core';
import {FormPokemonComponent} from "../form-pokemon/form-pokemon.component";
import {NgIf} from "@angular/common";
import ModelPokemon from "../../models/pokemon.model";

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
    imports: [
        FormPokemonComponent,
        NgIf
    ],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent implements OnInit{
  pokemon:ModelPokemon;
  ngOnInit() {
    this.pokemon = new ModelPokemon();
  }


}
