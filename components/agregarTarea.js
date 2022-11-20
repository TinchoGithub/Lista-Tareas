import tareaCompletada from './tareaCompletada.js'
import borrarIcono from './borrarIcono.js';
import { leerTarea } from './leerTarea.js';

    export const agregarTarea = (evento) => {
      evento.preventDefault(); //impide que se actualice el form
      
      const lista = document.querySelector('[data-list]');
      const input = document.querySelector('[data-form-input]');
      const calendario = document.querySelector('[data-form-date]');
      
      const value = input.value;
      const date = calendario.value;
      const dateFormat = moment(date).format('DD/MM/YYYY');

      if(value == '' || dateFormat == ''){
        swal("Oops...!", "No se puede agregar una tarea vacía, por favor complete los campos", "warning");
        return
      }

      input.value = '';
      calendario.value = '';

      const complete = false;

      const tareaObjeto = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
      }

      lista.innerHTML = '';

      const tareaList = JSON.parse(localStorage.getItem("tareas")) || [];
      tareaList.push(tareaObjeto);
      localStorage.setItem("tareas", JSON.stringify(tareaList));
      leerTarea();
    };

    export const crearTarea = ({value, dateFormat, complete, id}) => {
    const tarea = document.createElement('li');
    tarea.classList.add('card');
    
    const tareaContenido = document.createElement('div');
    const check = tareaCompletada(id);
    if (complete){
      check.classList.toggle('fas'); //Con toogle cambio o no la clase para cambiar de icono
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    const tituloTarea = document.createElement('span');
    tituloTarea.classList.add('tarea');
    tituloTarea.innerText = value;
    
    tareaContenido.appendChild(check);
    tareaContenido.appendChild(tituloTarea);
  
    const dataElement = document.createElement("span");

    
    tarea.appendChild(tareaContenido);
    tarea.appendChild(dataElement);
    tarea.appendChild(borrarIcono(id));
  
    return tarea;
  };