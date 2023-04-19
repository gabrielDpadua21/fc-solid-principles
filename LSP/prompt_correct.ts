abstract class Shape {
    public abstract area(): number;
  }
  
  class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
  
    public area(): number {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
  
    public area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  