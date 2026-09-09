import { Mobile } from "./Mobile.js";
import rocketImg from "./assets/images/rocket.png";

export class Rocket extends Mobile {
  constructor(x, y) {
    super(x, y, rocketImg, 6, 0);
  }
}