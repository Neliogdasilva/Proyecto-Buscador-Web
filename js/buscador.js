// crear selectores o variables

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max-10
//console.log(min)

//crear objeto
const datosBusqueda = {
    marca:"",
    modelo:"",
    year: "",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",
}

//evento
document.addEventListener( "DOMContentLoaded",()=>{
    //llenar el listado del select de year
    llenarSelect();

    mostrarAutos(autos);

});

marca.addEventListener("input" ,e=>{
    datosBusqueda.marca = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

year.addEventListener("input" ,e=>{
    datosBusqueda.year = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

minimo.addEventListener("input" ,e=>{
    datosBusqueda.minimo = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

maximo.addEventListener("input" ,e=>{
    datosBusqueda.maximo = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

puertas.addEventListener("input" ,e=>{
    datosBusqueda.puertas = Number(e.target.value)
    //console.log(datosBusqueda)
    filtrarAuto();
})

transmision.addEventListener("input" ,e=>{
    datosBusqueda.transmision = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

color.addEventListener("input" ,e=>{
    datosBusqueda.color = e.target.value
    //console.log(datosBusqueda)
    filtrarAuto();
})

function llenarSelect(){
    for(let i=max;i>min;i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function mostrarAutos(arregloAutos){
    limpiarHTML();

    arregloAutos.forEach(auto => {
        const autoHTML = document.createElement("p")
        
        const {marca,modelo,year,precio,color,puertas,transmision} = auto;
        
        autoHTML.textContent = `${marca} - ${modelo} - Año: ${year} - Precio: ${precio}$ - Color: ${color} - Puertas: ${puertas} - Trasmision: ${transmision}`;
        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector("#resultado");
    
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTrasmision)

    console.log(resultado)
    
    if(resultado.length){  
        mostrarAutos(resultado)
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('No hay resultados que coincidan con su busqueda'));
    document.querySelector('#resultado').appendChild(noResultado); 
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto;
}

function filtrarTrasmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto;
}