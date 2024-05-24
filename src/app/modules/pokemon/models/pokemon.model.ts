export default class ModelPokemon {
  // 1. Typage des propiétés d'un pokémon.
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
  constructor(
    name: string = '',
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png',
    types: Array<string> = [],
    created: Date = new Date()
  ) {
    // 3. Initialisation des propiétés d'un pokémons.

    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
