let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);



saveButton.addEventListener(`click`, function () {
    let template = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${titleInput.value}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
            <p class="card-text">${textInput.value}</p>
        </div>
        <div class="card-footer text-muted">
            ${dateInput.value}
        </div>
    </div>
    `;
    notesNode.innerHTML += template;
});
