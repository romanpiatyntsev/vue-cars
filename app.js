const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => ({ text, type, date })

const cars = [
    car("Ford", 'Focus', 'Max', 2016, '+380509739644', 'images/ford-focus.jpg'),
    car("Ford", 'Mondeo', 'Victor', 2016, '+380669700699', 'images/ford-mondeo.jpg'),
    car("Porshe", 'Panamera', 'Roman', 2016, '+38050473000', 'images/panamera.jpeg'),
]

new Vue({
    el: '#app',
    data: {

        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneView: false,
        search: '',
        showModal: false
    },
    methods: {
        selectCar(i) {
            this.car = cars[i]
            this.selectedCarIndex = i
        },
        addOrder() {
            this.showModal = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )

        },
        cancelOrder() {
            this.showModal = false
            this.logs.push(
                log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },
    computed: {
        phoneBtnTex() {
            return this.phoneView ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})