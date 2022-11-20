import { agregarTarea } from "./components/agregarTarea.js";
import { leerTarea } from "./components/leerTarea.js";

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', agregarTarea);

leerTarea();