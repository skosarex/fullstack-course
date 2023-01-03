let onNode = document.querySelector(`#on`);
let offNode = document.querySelector(`#off`);
let lampNode = document.querySelector(`#lamp`);

onNode.addEventListener(`click`, function () {
    lampNode.innerHTML = `<img id="lamp" class="img img-fluid" src="assets/light.png" />`;
});


offNode.addEventListener(`click`, function () {
    lampNode.innerHTML = `<img id="lamp" class="img img-fluid" src="assets/dark.png" />`;
});