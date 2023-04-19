interface Animal {
   fly(): void;
   swim(): void;
   walk():void;
}

class Bird implements Animal {
  public fly() {
    // implementação para voar
  }
  public swim() {
    // implementação para nadar
  }
  public walk() {
    // implementação para andar
  }
}
