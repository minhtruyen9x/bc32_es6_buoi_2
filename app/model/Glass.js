const dataGlasses = [
    { id: "G1", src: "./assets/img/g1.jpg", virtualImg: "./assets/img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./assets/img/g2.jpg", virtualImg: "./assets/img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./assets/img/g3.jpg", virtualImg: "./assets/img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./assets/img/g4.jpg", virtualImg: "./assets/img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./assets/img/g5.jpg", virtualImg: "./assets/img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./assets/img/g6.jpg", virtualImg: "./assets/img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./assets/img/g7.jpg", virtualImg: "./assets/img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./assets/img/g8.jpg", virtualImg: "./assets/img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./assets/img/g9.jpg", virtualImg: "./assets/img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

class Glass {
    constructor(id, image, virtualImg, brand, name, color, price, description) {
        this.id = id
        this.image = image;
        this.virtualImg = virtualImg;
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.price = price;
        this.description = description;
    }

    getHtmlImage() {
        return `
        <div class="vglasses__item col-6 col-md-4 col-lg-3" data-id="${this.id}" data-type="glass">
            <img src="${this.image}" alt="">
        </div>`
    }

    getHtmlGlass() {
        return `<img src="${this.virtualImg}" alt="">`
    }

    getHtmlInfo() {
        return `
            <div class="vglasses__info__title">${this.name}(${this.color})</div>
            <div class="vglasses__info__sale">
                <div class="vglasses__info__price">$${this.price}</div>
                <div class="vglasses__info__left">Stocking</div>
            </div>
            <div class="vglasses__info__dessribtion">${this.description}</div>
        `
    }
}

function getData() {
    return Promise.resolve(dataGlasses)
}

export { getData }
export default Glass