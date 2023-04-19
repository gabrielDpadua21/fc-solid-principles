interface Category {}

class HorrorsCategory implements Category {}

class Movies {
    #name: string;
    #category: Category;

    constructor(name: string, category: Category) {
        this.#name = name;
        this.#category = category;
    }
}

