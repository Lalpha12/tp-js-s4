import { Basket } from './Basket.js';
import { Egg } from './Egg.js';
import { Rocket } from './Rocket.js';

export default class Game {

   #canvas;
   #context;
   #player ; 
   #eggs;
   #timer;
   #score;
   #rockets;
   #rocketTimer;
   #lives;
   #running;
   #gameOver;

   constructor(canvas) {
      this.#canvas = canvas;
      this.#context = canvas.getContext('2d');
      this.#player = new Basket(canvas.width / 2, canvas.height / 2);
      this.#eggs = [];
      this.#rockets = [];
      this.#lives = 3;
      this.#score = 0;
      this.#timer = null;
      this.#rocketTimer = null;
      this.#running = false;
      this.#gameOver = false;


      window.addEventListener ("keydown", (event)=>{
         const key = event.key; 
         if(key === "ArrowLeft") {
            this.#player.moveLeft(); 
         }
         else if (key === "ArrowRight") {
            this.#player.moveRight(); 
         }
         else if (key === "ArrowUp") {
            this.#player.moveUp(); 
         }
         else if (key === "ArrowDown"){
            this.#player.moveDown(); 
         }


   });

   window.addEventListener("keyup", () => {
            this.#player.dx = 0;
            this.#player.dy = 0;
            this.#player.moving = null;
        });

   }


   
   get canvas() {
      return this.#canvas;
   }
   get context() { 
      return this.#context; 
   }

   get player (){
      return this.#player ; 
   }

   #spawnEgg = () => {
    if (Math.random() < 0.75) {
      const x = Math.random() * this.#canvas.width;
      this.#eggs.push(new Egg(x, 0));
    }
   };
   #spawnRocket = () => {
    if (Math.random() < 0.5) {
      const y = Math.random() * this.#canvas.height;
      this.#rockets.push(new Rocket(0, y));
    }
   };

   #removeRocketsOutOfBounds = () => {
    this.#rockets = this.#rockets.filter(rocket => rocket.x < this.#canvas.width);
   };

   
   #removeEggsOutOfBounds = () => {
    this.#eggs = this.#eggs.filter(egg => egg.y < this.#canvas.height);
   };


   #updateLivesDisplay = () => {
    document.getElementById("life-1").style.visibility = this.#lives >= 1 ? 'visible' : 'hidden';
    document.getElementById("life-2").style.visibility = this.#lives >= 2 ? 'visible' : 'hidden';
    document.getElementById("life-3").style.visibility = this.#lives >= 3 ? 'visible' : 'hidden';
   };

   #stopGame = () => {
    this.#running = false;
    this.#gameOver = true;
    clearInterval(this.#timer);
    clearInterval(this.#rocketTimer);
   };
  
 
   animate = () => {
    if (!this.#running) {
      if (this.#gameOver)  {
    this.#context.fillStyle = 'red';
    this.#context.font = 'bold 80px Arial';
    this.#context.textAlign = 'center';
    this.#context.fillText('Vous avez perdu', this.#canvas.width / 2, this.#canvas.height / 2);
    }
      return; 
    }
    this.#context.clearRect(0 , 0, this.#canvas.width, this.#canvas.height); 
    this.#player.move(this.#canvas) ;
    this.#eggs.forEach(egg => egg.move());
    this.#rockets.forEach(rocket => rocket.move());

    this.#rockets.forEach(rocket => {
      this.#eggs = this.#eggs.filter(egg => !rocket.collidesWith(egg));
    });

    this.#rockets = this.#rockets.filter(rocket => {
      if (rocket.collidesWith(this.#player)) {
        this.#score -= 500;
        this.#lives -= 1;
        document.getElementById("score").textContent = this.#score;
        this.#updateLivesDisplay();
        if (this.#lives <= 0) {
          this.#stopGame();
        }
        return false; 
      }
      return true;
    });

    this.#eggs = this.#eggs.filter(egg => {
    if (this.#player.collidesWith(egg)) {
      this.#score += 100;
      document.getElementById("score").textContent = this.#score;
      return false; 
    }
    return true;
   });

  
 
    
    this.#removeEggsOutOfBounds();
    this.#removeRocketsOutOfBounds();

    this.#player.draw(this.#context);
    this.#eggs.forEach(egg => egg.draw(this.#context));
    this.#rockets.forEach(rocket => rocket.draw(this.#context));



    requestAnimationFrame(this.animate);
  };


  start() {
   if (this.#running) return; 
   this.#running = true; 
   this.#gameOver = false;

   this.#score = 0;
   this.#lives = 3;
   this.#eggs = [];
   this.#rockets = [];

   document.getElementById("score").textContent = 0;
   this.#updateLivesDisplay();
   this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)

   this.#timer = setInterval(this.#spawnEgg, 1000);

   this.#rocketTimer = setInterval(this.#spawnRocket, 1000);

   this.#player.image.onload = () => {
    requestAnimationFrame(this.animate);
  };
  if (this.#player.image.complete) {
    requestAnimationFrame(this.animate);
  }

}
 

   
}


