let outputNode = document.querySelector(`#output`);
let dotNode = document.querySelector(`#dot`);
let slashNode = document.querySelector(`#slash`);
let spaceNode = document.querySelector(`#space`);
let clearNode = document.querySelector(`#clear`);

dotNode.addEventListener(`click`, function () {
    outputNode.innerHTML += `•`;
//  outputNode.innerHTML = outputNode.innerHTML + `•`;
});

slashNode.addEventListener(`click`, function () {
    outputNode.innerHTML += `-`;
});

spaceNode.addEventListener(`click`, function() {
    outputNode.innerHTML += `&nbsp;`;
});

clearNode.addEventListener(`click`, function() {
    outputNode.innerHTML = ``;
});