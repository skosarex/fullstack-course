let dragonNode = document.querySelector(`#dragon`)
let healthNode = document.querySelector(`#health`)

health = 50;
step = 0;

dragonNode.addEventListener(`click`, function () {
    if (step % 3 == 0) {
        health -= 1;
    } else if (step % 3 == 1) {
        health -= 3;
    } else if (step % 3 == 2) {
        health -= 10;
    }

    healthNode.innerHTML = `Здоровье: ` + health;
    step++;

    if (health < 1) {
        healthNode.innerHTML = `Вы побеждаете дракона. Он на ваших глазах уменьшается и становится маленьким и симпатичным. Возьмём его с собой?`;
        dragonNode.innerHTML = `<img class="wheel" src="assets/dragon-fruit.png" alt="" id="enemy"/>`
    }
});