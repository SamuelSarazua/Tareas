import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { cargarTareas } from './componentes/tareas/tareas.js';

function cargarDOM() {
    let DOM = document.getElementById("root");

    let html = document.createElement('div');
    html.className = "contenedor-prin";

    DOM.appendChild(html);
    html.appendChild(header());

    let contenedorTareas = document.createElement('div');
    contenedorTareas.id = "tareas-container";
    html.appendChild(contenedorTareas);

    html.appendChild(formulario());

    cargarTareas();
}

cargarDOM();