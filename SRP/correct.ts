
class Course {

    #name: string;
    #category: string;
    #price: number;

    constructor(name: string, category: string, price: number) {
        this.#name = name;
        this.#category = category;
        this.#price = price;
    }

    get name(): string {
        return this.#name;
    }

    get category(): string {
        return this.#category;
    }

    get price(): number {
        return this.#price;
    }

    set name(value: string) {
        this.#name = value;
    }

    set category(value: string) {
        this.#category = value;
    }

    set price(value: number) {
        this.#price = value;
    }

}