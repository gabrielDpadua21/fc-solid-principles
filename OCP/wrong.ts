class Media {

    #type: string;

    constructor(type: string) {
        this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(value: string) {
        this.#type = value;
    }

    render() {
        if(this.#type === 'video') {
            console.log('Rendering video');
        }
        
        if(this.#type === 'audio') {
            console.log('Rendering audio');
        }

        if (this.#type === 'image') {
            console.log('Rendering image');
        }
    }
}