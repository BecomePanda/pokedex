export const typeCaptalize = (type) => {
  switch (type.name) {
    case "electric":
      return "#E5DE00";
    case "water":
      return "#83d7ee";
    case "fire":
      return "#f27d0c";
    case "bug":
      return "#74B72E";
    case "grass":
      return "#03C04A";
    case "normal":
      return "#cccccc";
    case "ground":
      return "#c2b280";
    case "poison":
      return "#7A4988";
    case "fighting":
      return "#8B4000";
    case "fairy":
      return "#ffcae5";
    case "psychic":
      return "#D6006E";
    case "rock":
      return "#b7a276";
    case "ghost":
      return "#9a5b9a";
    case "ice":
      return "#4479c0";
    case "dragon":
      return "#29021A";
    case "flying":
      return "#CBC3E3";
    default:
      return;
  }
};
