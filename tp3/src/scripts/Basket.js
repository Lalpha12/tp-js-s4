
import { Mobile} from "./Mobile.js"; 
import BASKETIMG from './assets/images/basket.png';


export class Basket extends Mobile {
    #moving ;
    constructor(x, y) {
        super(x, y,  BASKETIMG, 0, 0);
        this.#moving = null ;       
    }

    get moving() {
        return this.#moving; 
    }
    set moving(value) {
        this.#moving = value ; 
    }

    moveUp() {
        this.dy = -10 ; 
        this.#moving = 'up'; 
    }

    moveDown() {
        this.dy = 10 ;
        this.#moving = 'down'; 
    }

    moveLeft(){
        this.dx = -10;
        this.#moving = 'left'
    }
    
    moveRight() {
        this.dx = 10 ;
        this.#moving = 'right'; 
    }
    move(canvas) {
        super.move(); 

        if (this.x < 0){
            this.x = 0;
        }
        if (this.y < 0){
            this.y = 0;
        }
        if (this.x + this.image.width > canvas.width){
            this.x = canvas.width - this.image.width;
        }
        if (this.y + this.image.height > canvas.height){
            this.y = canvas.height - this.image.height;
        }

    }

    
}




