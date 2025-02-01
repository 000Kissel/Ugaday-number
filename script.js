const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('#msg')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random = getRandomInt(1, 20);
console.log(random);
let i = 0;


myBtn.addEventListener('click', () => {
    i++;
    let num = nameInput.value
    if (num == random) {
        msg.classList.remove('color1');
        msg.classList.add('color');
        msg.textContent = `Вы угадали число за ${i} попыток`

    } else {
        msg.classList.remove('color');
        msg.classList.add('color1');
        msg.textContent = 'Вы не угадали число'

    }

})