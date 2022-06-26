interface TypeColor {
  translate: string;
  textColor: string;
}

const typeColors = (type: string): TypeColor => {
  const types: Record<string, TypeColor> = {
    normal: {
      translate: 'Normal',
      textColor: 'text-white',
    },
    fighting: {
      translate: 'Lucha',
      textColor: 'text-white',
    },
    flying: {
      translate: 'Volador',
      textColor: 'text-black',
    },
    poison: {
      translate: 'Veneno',
      textColor: 'text-white',
    },
    ground: {
      translate: 'Tierra',
      textColor: 'text-black',
    },
    rock: {
      translate: 'Roca',
      textColor: 'text-white',
    },
    bug: {
      translate: 'Bicho',
      textColor: 'text-white',
    },
    ghost: {
      translate: 'Fantasma',
      textColor: 'text-white',
    },
    steel: {
      translate: 'Acero',
      textColor: 'text-black',
    },
    fire: {
      translate: 'Fuego',
      textColor: 'text-white',
    },
    water: {
      translate: 'Agua',
      textColor: 'text-white',
    },
    grass: {
      translate: 'Planta',
      textColor: 'text-black',
    },
    electric: {
      translate: 'Eléctrico',
      textColor: 'text-black',
    },
    psychic: {
      translate: 'Psíquico',
      textColor: 'text-white',
    },
    ice: {
      translate: 'Hielo',
      textColor: 'text-black',
    },
    dragon: {
      translate: 'Dragón',
      textColor: 'text-white',
    },
    dark: {
      translate: 'Siniestro',
      textColor: 'text-white',
    },
    fairy: {
      translate: 'Hada',
      textColor: 'text-black',
    },
    unknown: {
      translate: 'Desconocido',
      textColor: 'text-black',
    },
    shadow: {
      translate: 'Sombra',
      textColor: 'text-white',
    }
  };
  return types[type];
};

export default typeColors;
