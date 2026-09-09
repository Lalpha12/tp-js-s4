
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;
  static BALL_Heigth = 48 ; 

  constructor(x = 50, y= 50, deltaX = 3 , deltaY = -2) {
    this.x = x ; 
    this.y = y; 
    this.deltaX = deltaX; 
    this.deltaY = deltaY; 
    this.image = this.#createImage(ballImgSrc);
  }


  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    context.drawImage(this.image, this.x, this.y, Ball.BALL_WIDTH, Ball.BALL_Heigth);
  }

  move(canvas) {
    if ( this.x +this.deltaX <0 || this.x + this.deltaX + Ball.BALL_WIDTH> canvas.width){
      this.deltaX = - this.deltaX; 
    }
    if( this.y + this.deltaY <0 || this.y + this.deltaY + Ball.BALL_Heigth > canvas.height) {
      this.deltaY = -this.deltaY; 
    }
    this.x += this.deltaX; 
    this.y += this.deltaY; 
  }

  collisionWith(obstacle) {
  const p1x = this.x + Ball.BALL_WIDTH;
  const p1y = this.y + Ball.BALL_Heigth;
  const p2x = obstacle.x + obstacle.width;
  const p2y = obstacle.y + obstacle.height;

  return this.x < p2x && p1x > obstacle.x &&
         this.y < p2y && p1y > obstacle.y;
}
  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

}
