class HorrorCategory {}

class Movie {
    
    #name: string;
    #category: any;

    constructor(name: string, category: string) {
        this.#name = name;
        this.#category = category;
    }

    get name(): string {
        return this.#name;
    }

    get category(): HorrorCategory {
        return new HorrorCategory();
    }

    set category() {
        this.#category = new HorrorCategory();
    }
}