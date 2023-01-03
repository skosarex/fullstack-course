let onNode = document.querySelector(`#on`);
let offNode = document.querySelector(`#off`);
let lampNode = document.querySelector(`#lamp`);

let pageNode = document.querySelector(`#page`);

onNode.addEventListener(`click`, function () {
    page.classList.remove("dark");
    lampNode.innerHTML = `<img id="lamp" class="img img-fluid" src="assets/light.png" />`;
});

offNode.addEventListener(`click`, function () {
    page.classList.add("dark");
    lampNode.innerHTML = `<img id="lamp" class="img img-fluid" src="assets/dark.png" />`;
});