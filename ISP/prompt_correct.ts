interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  interface Walkable {
    walk(): void;
  }
  
  class Birds implements Flyable, Walkable {
    fly() {
      // implementação para voar
    }
    walk() {
      // implementação para andar
    }
  }
  