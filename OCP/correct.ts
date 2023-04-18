abstract class Medias {

    render() {
        
    }
}

class Videos extends Medias {
    render() {
        console.log('Rendering video');
    }
}

class Audios extends Medias {
    render() {
        console.log('Rendering audio');
    }
}

class Images extends Medias {
    render() {
        console.log('Rendering image');
    }
}