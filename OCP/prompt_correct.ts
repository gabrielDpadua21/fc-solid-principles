interface Shapes {
    calculateAreas(): number;
  }
  
  class Circles implements Shapes {
    public radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    public calculateAreas(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Squares implements Shapes {
    public side: number;
    constructor(side: number) {
      this.side = side;
    }
    public calculateAreas(): number {
      return Math.pow(this.side, 2);
    }
  }
  
  class AreaCalculators {
    public shapes: Shapes[];
    constructor(shapes: Shapes[]) {
      this.shapes = shapes;
    }
    public sum(): number {
      let sum = 0;
      for (let shape of this.shapes) {
        sum += shape.calculateAreas();
      }
      return sum;
    }
  }
  