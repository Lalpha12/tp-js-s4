import { Mobile } from "./Mobile.js";
import blueEgg from "./assets/images/blue-egg.png";
import greenEgg from "./assets/images/green-egg.png";
import yellowEgg from "./assets/images/yellow-egg.png";

const IMAGES =[blueEgg,greenEgg,yellowEgg] 

export  class Egg extends Mobile{

constructor(x,y){
    
    const choixImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    super(x, y, choixImage, 0, 4);

}

}