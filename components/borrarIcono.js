import { leerTarea } from "./leerTarea.js";

const borrarIcono = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', ()=> borrarTarea(id));
  return i;
};

const borrarTarea = (id) => {
  const li = document.querySelector("[data-list]");

  const tareas = JSON.parse(localStorage.getItem("tareas"));
  const index = tareas.findIndex((item)=> item.id == id);
  console.log(index);
  tareas.splice(index, 1);
  li.innerHTML = '';
  localStorage.setItem("tareas", JSON.stringify(tareas));
  leerTarea();

};

export default borrarIcono;
