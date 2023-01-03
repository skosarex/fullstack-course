let elementNode = document.querySelector(`#element`);

elementNode.addEventListener(`click`, function () {
    if (elementNode.classList.contains("circle")) {
        elementNode.classList.remove("circle");
    } else {
        elementNode.classList.add("circle");
    }

})