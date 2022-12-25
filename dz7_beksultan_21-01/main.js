class cars {
    static type = 'car'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!');
    }
}
class Bmw extends cars {
    static type = 'Germany'

    constructor(options) {
        super(options);
        this.fuel = options.fuel
    }
}

const bmw = new Bmw({
    model: 'bmw',
    color: 'black',
    wheels: 4,
    fuel: 'petrol'
})


console.log(bmw);
bmw.start()

class carsss {
    static type = 'car'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!');
    }
}
class merc extends carsss {
    static type = 'Germany'

    constructor(options) {
        super(options);
        this.fuel = options.fuel
    }
}

const mercedes = new Mercedes({
    model: 'bmw',
    color: 'black',
    wheels: 4,
    fuel: 'petrol'
})


console.log(merc);
bmw.start()


class carss {
    static type = 'car'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!');
    }
}
class tayota extends carss {
    static type = 'japan'

    constructor(options) {
        super(options);
        this.fuel = options.fuel
    }
}

const tayotaa = new Tayota({
    model: 'bmw',
    color: 'black',
    wheels: 4,
    fuel: 'petrol'
})


console.log(tayota);
bmw.start()







// class car {
//     static type = 'MERCEDES'

//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//     }

//     start() {
//         console.log('Машина заведена!')
//     }
// }
// const car = ({
//     model: 'mercedes',
//     color: 'black',
//     wheels: 4
// })


// class mercedes extends car {
//     static type = 'bmw'

//     constructor(options) {
//         super(options);
//         this.toplivo = options.toplivo
//         this.privod = options.privod
//         this.rasxod = options.rasxod
//     }

//     start() {
//         console.log('Машина заведена!')
//     }

//     get ageInfo() {
//        return console.log(this.rasxod * 6)
//     }

//     // set setAge(newAge) {
//     //     this.age = newAge
//     // }

// }

// const mercedes = new Merc({
//     toplivo: 'benzin',
//     privod: 'zadnyi',
//     rasxod: 20,
// })

// mercedes.start()
// console.log(mercedes)


// class Component {
//     constructor(selector) {
//         this.$element = document.querySelector(selector)
//     }

//     hide() {
//         this.$element.style.display = 'none'
//     }

//     show() {
//         this.$element.style.display = 'block'
//     }
// }

// class Block extends Component {
//     constructor(options) {
//         super(options.selector);

//         this.$element.style.width = this.$element.style.height = options.abai + 'px'
//         this.$element.style.background = options.color
//     }


// }

// const block1 = new Block({
//     selector: '#block1',
//     abai: 150,
//     color: 'blue'
// })

// const block2 = new Block({
//     selector: '#block2',
//     abai: 200,
//     color: 'red'
// })

// class Circle extends Block {
//     constructor(options) {
//         super(options);
//         this.$element.style.borderRadius = '50%'
//     }
// }

// const circle = new Circle({
//     selector: '.circle',
//     abai: 90,
//     color: 'green'
// })

// circle.hide()
// circle.show()






