class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

    describe() {
        return `A ${this.size} pizza with ${this.toppings.join(', ')}`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#studentInfo').innerText = 'Student ID: 200520470, Name: Simarpreet Kaur';

    const pizzaOrderForm = document.querySelector('#pizzaOrderForm');
    pizzaOrderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const size = document.querySelector('#size').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(el => el.value);

        const pizza = new Pizza(size, toppings);

        document.querySelector('#pizzaDescription').innerText = pizza.describe();
    });
});
