import Animation from './animation';

export default class AnimationWithObstacle extends Animation {
  constructor(canvas, obstacle) {
    super(canvas);
    this.obstacle = obstacle;
  }

  animate = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => ball.move(this.canvas));
    this.balls = this.balls.filter(ball => !ball.collisionWith(this.obstacle));
    this.obstacle.draw(this.context);
    this.balls.forEach(ball => ball.draw(this.context));
    this.raf = window.requestAnimationFrame(this.animate);
  }
}