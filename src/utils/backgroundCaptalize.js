import ElectricBG from "../assets/electric_bg.jpg";
import WaterBG from "../assets/water_bg.jpg";
import GrassBG from "../assets/grass_bg.jpg";
import FireBG from "../assets/fire_bg.jpg";
import BugBG from "../assets/bug_bg.jpg";
import NormalBG from "../assets/normal_bg.jpg";
import PoisonBG from "../assets/poison_bg.jpg";
import GroundBG from "../assets/ground_bg.jpg";
import FairyBG from "../assets/fairy_bg.jpg";
import FightingBG from "../assets/fighting_bg.jpg";
import PsychicBG from "../assets/psychic_bg.jpg";
import RockBG from "../assets/rock_bg.jpg";
import GhostBG from "../assets/ghost_bg.jpg";
import IceBG from "../assets/ice_bg.jpg";
import DragonBG from "../assets/dragon_bg.jpg";
import SteelBG from "../assets/steel_bg.jpg";
import DarkBG  from "../assets/dark_bg.jpg";

export const backgroundCaptalize = (types) => {
  if (types == null) {
    return;
  }

  switch (types[0].type.name) {
    case "electric":
      return ElectricBG;
    case "water":
      return WaterBG;
    case "grass":
      return GrassBG;
    case "fire":
      return FireBG;
    case "bug":
      return BugBG;
    case "normal":
      return NormalBG;
    case "poison":
      return PoisonBG;
    case "ground":
      return GroundBG;
    case "fairy":
      return FairyBG;
    case "fighting":
      return FightingBG;
    case "psychic":
      return PsychicBG;
    case "rock":
      return RockBG;
    case "ghost":
      return GhostBG;
    case "ice":
      return IceBG;
    case "dragon":
      return DragonBG;
    case "steel":
      return SteelBG;
    case "dark":
      return DarkBG;
    default:
      return;
  }
};
