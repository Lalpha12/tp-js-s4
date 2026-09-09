export class Mobile {
  #x;
  #y;
  #dx;
  #dy;
  #image;

  constructor(x, y, imageSrc, dx = 0, dy = 0) {
    this.#x = x;
    this.#y = y;
    this.#dx = dx;
    this.#dy = dy;
    this.#image = new Image();
    this.#image.src = imageSrc;
  }

  get x() { return this.#x; }
  get y() { return this.#y; }
  get dx() { return this.#dx; }
  get dy() { return this.#dy; }
  get image() { return this.#image; }
  get width() { return this.#image.width; }
  get height() { return this.#image.height; }

  set x(value) { this.#x = value; }
  set y(value) { this.#y = value; }
  set dx(value) { this.#dx = value; }
  set dy(value) { this.#dy = value; }

  collidesWith(other) {
    return (
      this.#x < other.x + other.width &&
      this.#x + this.#image.width > other.x &&
      this.#y < other.y + other.height &&
      this.#y + this.#image.height > other.y
    );
  }

  draw(context) {
    context.drawImage(this.#image, this.#x, this.#y);
  }

  move() {
    this.#x += this.#dx;
    this.#y += this.#dy;
  }
}