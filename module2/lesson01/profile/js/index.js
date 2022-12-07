let name = `Эмиль`;
let age = 20;
let role = `Бард`;
let ability = `Сила убеждения и остроумные шутки`;
let gold = 3;

let abilityNode = document.querySelector(`#ability`);
let goldNode = document.querySelector(`#gold`);

abilityNode.innerHTML = ability;
goldNode.innerHTML = `В кармане ` + gold + ` золотых`;
