import { crearTarea } from "./agregarTarea.js";
import { unicasFechas, orderDates } from "./services/date.js";
import dateElement from "./dateElement.js";

export const leerTarea = ()=>{
    const list = document.querySelector('[data-list]');
    
    const tareaList = JSON.parse(localStorage.getItem("tareas")) || [];
    const dates= unicasFechas(tareaList);
    orderDates(dates)
    dates.forEach(date=>{
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date))
        tareaList.forEach((tarea)=>{
            const tareaDate = moment(tarea.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(tareaDate);
            if(diff == 0){
                list.appendChild(crearTarea(tarea));
            }            
            
        });
    });


    
    
}