const tareaCompletada = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => checkTarea(event, id));
  return i;
};


const checkTarea = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas'); //Con toogle cambio o no la clase para cambiar de icono
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  console.log("check id", id);
  const tareas = JSON.parse(localStorage.getItem(("tareas")));
  const index = tareas.findIndex(item => item.id == id);
  console.log(index);
  tareas[index]["complete"] = !tareas[index]["complete"]
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

export default tareaCompletada;
