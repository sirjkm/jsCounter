function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element
    }
    throw new Error(`Please check ${selection}, no such element exists`)
}

function Counter(element, value) {
    this.counter = element;
    this.value = value;
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.resetBtn.addEventListener("click", this.reset.bind(this));
    this.increaseBtn.addEventListener("click", this.increase.bind(this));
}

Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

