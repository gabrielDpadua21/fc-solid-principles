
class Courses {

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

    // This exemplo the class is wrong, not have one responsability

    connection(): any {
        console.log("Connection to database")
    }

    createCategory(category: string) {
        console.log("Creating category: ", category)
    }

}