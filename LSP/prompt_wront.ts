class Animal {
    public makeSound() {
      console.log('O animal fez um som');
    }
  }
  
  class Dog extends Animal {
    public makeSound() {
      console.log('O cachorro latiu');
    }
  }
  
  class Cat extends Animal {
    public makeSound() {
      console.log('O gato miou');
    }
  }
  
  class SilentCat extends Cat {
    public makeSound() {
      // Não faz nada
    }
  }
  