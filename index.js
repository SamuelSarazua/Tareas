import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { tarea } from "./componentes/tareas/tareas.js";

let DOM = document.getElementById("root");

let html = document.createElement(`div`);

DOM.appendChild(html);
html.appendChild(header());
html.appendChild(tarea());
html.appendChild(formulario());
