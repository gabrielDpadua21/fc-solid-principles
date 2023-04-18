class Shape {
    public type: string;
    constructor(type: string) {
      this.type = type;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super("circle");
    }
  }
  
  class Square extends Shape {
    constructor() {
      super("square");
    }
  }
  
  class AreaCalculator {
    public shapes: Shape[];
    constructor(shapes: Shape[]) {
      this.shapes = shapes;
    }
    public sum(): number {
      let sum = 0;
      for (let shape of this.shapes) {
        if (shape.type === "circle") {
          sum += Math.PI * Math.pow(2, 2);
        } else if (shape.type === "square") {
          sum += Math.pow(4, 2);
        }
      }
      return sum;
    }
  }
  