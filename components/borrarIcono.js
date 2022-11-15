const borrarIcono = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', borrarTarea);
  return i;
};

const borrarTarea = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};

export default borrarIcono;
