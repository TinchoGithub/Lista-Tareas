const tareaCompletada = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', checkTarea);
  return i;
};


const checkTarea = (event) => {
  const element = event.target;
  element.classList.toggle('fas'); //Con toogle cambio o no la clase para cambiar de icono
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

export default tareaCompletada;
