let loginButton = document.querySelector(`#login-button`);
let promocodeInput = document.querySelector(`#promocode`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`);
let sushiNode = document.querySelector(`#sushi`);

loginButton.addEventListener(`click`, function () {
    if (promocodeInput.value == ``) {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        invalidNode.innerHTML = `Нельзя использовать пустой промокод`;
    } else if (promocodeInput.value == `MSHP2022`) {
        promocodeInput.classList.add(`is-valid`);
        promocodeInput.classList.remove(`is-invalid`);
        sushiNode.classList.remove(`d-none`);
        loginButton.classList.add(`disabled`);
        validNode.innerHTML = `Ура, вы получили набор из 4х суши с лососем`;
    } else {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        invalidNode.innerHTML = `Увы, такого промокода нет`;
    }
});