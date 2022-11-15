import tareaCompletada from './components/tareaCompletada.js';
import borrarIcono from './components/borrarIcono.js';

const btn = document.querySelector('[data-form-btn]');

const crearTarea = (evento) => {
  evento.preventDefault(); //impide que se actualice el form
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const tarea = document.createElement('li');
  tarea.classList.add('card');
  input.value = '';
 
  const tareaContenido = document.createElement('div');

  const tituloTarea = document.createElement('span');
  tituloTarea.classList.add('tarea');
  tituloTarea.innerText = value;
  
  tareaContenido.appendChild(tareaCompletada());
  tareaContenido.appendChild(tituloTarea);
  // task.innerHTML = content;

  tarea.appendChild(tareaContenido);
  tarea.appendChild(borrarIcono());
  list.appendChild(tarea);
};


btn.addEventListener('click', crearTarea);
