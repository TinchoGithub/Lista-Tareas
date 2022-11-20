

export const unicasFechas = (tareas) =>{
    const unicas = [];

    tareas.forEach( (tarea) => {
        if(!unicas.includes(tarea.dateFormat)){
            unicas.push(tarea.dateFormat);
        }
    });
    
    return unicas;
}

export const orderDates = (dates) =>{
    return dates.sort( (a, b) =>{
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
       
    });
}