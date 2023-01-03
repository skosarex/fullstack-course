let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {
    if (answerNode.innerHTML === `cat`) {
        resultNode.innerHTML = `Правильно!`;
    } else {
        resultNode.innerHTML = `Не в этот раз! :(`;
    }
});

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
    answerNode.innerHTML += `a`;
    a.classList.add(`disabled`);
});
b.addEventListener(`click`, function () {
    answerNode.innerHTML += `b`;
    b.classList.add(`disabled`);
});
c.addEventListener(`click`, function () {
    answerNode.innerHTML += `c`;
    c.classList.add(`disabled`);
});
d.addEventListener(`click`, function () {
    answerNode.innerHTML += `d`;
    d.classList.add(`disabled`);
});
e.addEventListener(`click`, function () {
    answerNode.innerHTML += `e`;
    e.classList.add(`disabled`);
});
f.addEventListener(`click`, function () {
    answerNode.innerHTML += `f`;
    f.classList.add(`disabled`);
});
g.addEventListener(`click`, function () {
    answerNode.innerHTML += `g`;
    g.classList.add(`disabled`);
});
h.addEventListener(`click`, function () {
    answerNode.innerHTML += `h`;
    h.classList.add(`disabled`);
});
i.addEventListener(`click`, function () {
    answerNode.innerHTML += `i`;
    i.classList.add(`disabled`);
});
j.addEventListener(`click`, function () {
    answerNode.innerHTML += `j`;
    j.classList.add(`disabled`);
});
k.addEventListener(`click`, function () {
    answerNode.innerHTML += `k`;
    k.classList.add(`disabled`);
});
l.addEventListener(`click`, function () {
    answerNode.innerHTML += `l`;
    l.classList.add(`disabled`);
});
m.addEventListener(`click`, function () {
    answerNode.innerHTML += `m`;
    m.classList.add(`disabled`);
});
n.addEventListener(`click`, function () {
    answerNode.innerHTML += `n`;
    n.classList.add(`disabled`);
});
o.addEventListener(`click`, function () {
    answerNode.innerHTML += `o`;
    o.classList.add(`disabled`);
});
p.addEventListener(`click`, function () {
    answerNode.innerHTML += `p`;
    p.classList.add(`disabled`);
});
q.addEventListener(`click`, function () {
    answerNode.innerHTML += `q`;
    q.classList.add(`disabled`);
});
r.addEventListener(`click`, function () {
    answerNode.innerHTML += `r`;
    r.classList.add(`disabled`);
});
s.addEventListener(`click`, function () {
    answerNode.innerHTML += `s`;
    s.classList.add(`disabled`);
});
t.addEventListener(`click`, function () {
    answerNode.innerHTML += `t`;
    t.classList.add(`disabled`);
});
u.addEventListener(`click`, function () {
    answerNode.innerHTML += `u`;
    u.classList.add(`disabled`);
});
v.addEventListener(`click`, function () {
    answerNode.innerHTML += `v`;
    v.classList.add(`disabled`);
});
w.addEventListener(`click`, function () {
    answerNode.innerHTML += `w`;
    w.classList.add(`disabled`);
});
x.addEventListener(`click`, function () {
    answerNode.innerHTML += `x`;
    x.classList.add(`disabled`);
});
y.addEventListener(`click`, function () {
    answerNode.innerHTML += `y`;
    y.classList.add(`disabled`);
});
z.addEventListener(`click`, function () {
    answerNode.innerHTML += `z`;
    z.classList.add(`disabled`);
});
