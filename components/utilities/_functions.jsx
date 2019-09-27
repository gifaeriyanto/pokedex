export const PokemonTypeColor = (pokemonType) => {
  switch (pokemonType) {
    case 'Grass':
      return '#49CFB0';

    case 'Fire':
      return '#FC6B6D';

    case 'Water':
      return '#75BEFE';

    case 'Electric':
      return '#FFD76F';

    case 'Ice':
      return '#9AD3EA';

    case 'Psychic':
      return '#999999';

    case 'Flying':
      return '#9BDFD4';

    case 'Poison':
      return '#CF4981';

    case 'Bug':
      return '#BA1E2D';

    case 'Ground':
      return '#6B470D';

    case 'Fairy':
      return 'pink';

    case 'Fighting':
      return '#999';

    case 'Rock':
      return '#000';

    default:
      return '#ccc';
  }
};
