'use strict';

const boton = document.querySelector('.js_boton');
const input = document.querySelector('.js_input'); 
const list = document.querySelector('.js_list');

boton.addEventListener('click', (ev) => {
ev.preventDefault();
    const textoEscrito = input.value;
    const html = `<li>${textoEscrito}</li>`;
    list.innerHTML += html;
});