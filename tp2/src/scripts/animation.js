import Ball from './ball';

const alea = (n) => Math.floor(Math.random() * n);

const aleaNonZero = (max) => {
  let val = alea(max * 2 + 1) - max;
  return val === 0 ? 1 : val;
}


/* TYPE Animation */
export default class Animation {

 constructor (canvas){
    this.canvas = canvas ; 
    this.context = canvas.getContext('2d'); 
    this.balls = [];
    this.raf = null ; 
 }

 addBall() {
    const x = alea(this.canvas.width - Ball.BALL_WIDTH);
    const y = alea(this.canvas.height - Ball.BALL_WIDTH);
    const deltaX = aleaNonZero(5);
    const deltaY = aleaNonZero(5);
    this.balls.push(new Ball(x, y, deltaX, deltaY));
  }

  animate =() => {
    this.context.clearRect(0 , 0, this.canvas.width, this.canvas.height); 
     this.balls.forEach(ball => {
      ball.move(this.canvas);
      ball.draw(this.context);
    });
    this.raf = window.requestAnimationFrame(this.animate); 
  }
 

  /* start the animation or stop it if previously running */
  startAndStop() {
    if(this.raf) {
      window.cancelAnimationFrame(this.raf);
      this.raf = null ; 
    }
    else{
      this.animate (); 
    }
    
  }
}
