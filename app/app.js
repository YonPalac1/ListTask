document.getElementById("button").addEventListener("submit", nuevaTarea);

function nuevaTarea(e){
  const titulo = document.getElementById("title").value;
  const descripcion = document.getElementById("description").value;
  const tareaInput = {
  titulo,
  descripcion
  }
  if (titulo === ""){
  return false;
  }
  if (localStorage.getItem("tareasPrimeraColumna") === null){
    let tarea = [];
    tarea.push(tareaInput);
    localStorage.setItem("tareasPrimeraColumna", JSON.stringify(tarea));
  } else {
    let tarea = JSON.parse(localStorage.getItem("tareasPrimeraColumna"));
    tarea.push(tareaInput);
    localStorage.setItem("tareasPrimeraColumna", JSON.stringify(tarea));
  }
mostrarColumnaUno();
e.preventDefault();
};




function mostrarColumnaUno(){
	let tomarTareasColumnaUno = JSON.parse(localStorage.getItem("tareasPrimeraColumna"));
	let mostrarTareasColumnaUno = document.getElementById("columna1");

		mostrarTareasColumnaUno.innerHTML = "";

	for (let i = 0; i < tomarTareasColumnaUno.length; i++){
		  let titulo = tomarTareasColumnaUno[i].titulo;
    	let descripcion = tomarTareasColumnaUno[i].descripcion;

		mostrarTareasColumnaUno.innerHTML +=`
    <div class="col s12 m7 tarjetaTarea">
    <div class="card horizontal">
    <div class="card-image botonCerrar">
      <i class="fas fa-times " onclick="eliminar('${titulo}');"></i>
    </div>
    <div class="card-stacked">
    <div class="card-content">
      <h5 class="header">${titulo}</h5>
      <p>${descripcion}</p>
    </div>
    </div>
    <button class="card-image  blue lighten-1" onclick="pasarAColumnaDos('${titulo}')">
      <i class="fas fa-arrow-right icono"></i>
    </button>
    </div>
    </div>
    `;

    Sortable.create(mostrarTareasColumnaUno, {
    animation: 150,
    onEnd:() => {},
    group: 'ordenColumnaUno', 
    store: {
    //Guardamos el orden de la lista
    set: (sortable) => {
      const orden = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, orden.join('|'));
    },
    //Obtenemos el orden de la lista
    get: (sortable) => {
    const orden = localStorage.getItem(sortable.options.group.name);
    return orden ? orden.split('|') : [] ;
    }}});                          
  }
};




function pasarAColumnaDos( valor ){
	let pasarTareas = JSON.parse(localStorage.getItem("tareasPrimeraColumna"));
	let auxiliar;

	for(let i = 0; i < pasarTareas.length; i++){
	if(pasarTareas[i].titulo == valor){
		auxiliar = pasarTareas[i];
	}};

guardarColumnaDos(auxiliar);

  for(let i = 0; i < pasarTareas.length; i++){
  if(pasarTareas[i].titulo == valor){
    pasarTareas.splice(i, 1);
  }};

localStorage.setItem("tareasPrimeraColumna", JSON.stringify(pasarTareas));
mostrarColumnaUno();
};




function guardarColumnaDos(valor){
   	if (localStorage.getItem("tareasSegundaColumna") === null){
    let tareas = [];
    tareas.push(valor);
    localStorage.setItem("tareasSegundaColumna", JSON.stringify(tareas));
    } else {
    let tareas = JSON.parse(localStorage.getItem("tareasSegundaColumna"));
    tareas.push(valor);
    localStorage.setItem("tareasSegundaColumna", JSON.stringify(tareas));
    };
mostrarColumnaDos();
};




function mostrarColumnaDos(){
	var tomarTareasColumnaDos = JSON.parse(localStorage.getItem("tareasSegundaColumna"));
	var mostrarTareasColumnaDos = document.getElementById("columna2");

	mostrarTareasColumnaDos.innerHTML = "";

	for(let i = 0; i < tomarTareasColumnaDos.length; i++){
		let titulo = tomarTareasColumnaDos[i].titulo;
		let descripcion = tomarTareasColumnaDos[i].descripcion;

		mostrarTareasColumnaDos.innerHTML += `
    <div class="col s12 m7 tarjetaTarea">
    <div class="card horizontal">
    <div class="card-image botonCerrar">
      <i class="fas fa-times" onclick="eliminar('${titulo}');"></i>
    </div>
    <div class="card-stacked">
    <div class="card-content">
      <h5 class="header">${titulo}</h5>
      <p>${descripcion}</p>
    </div>
    </div>
    <button class="card-image botonPasar teal lighten-2" onclick="pasarAColumnaTres('${titulo}');">
      <i class="fas fa-check-double icono"></i>
    </button>
    </div>
    </div>
    `;

    Sortable.create(mostrarTareasColumnaDos, {
    animation: 150,
    onEnd:() => {},
    group: 'ordenColumnaDos', 
    store: {
    //Guardamos el orden de la lista
    set: (sortable) => {
      const orden = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, orden.join('|'));
    },
    //Obtenemos el orden de la lista
    get: (sortable) => {
    const orden = localStorage.getItem(sortable.options.group.name);
    return orden ? orden.split('|') : [] ;
    }}}); 

  };
localStorage.setItem("tareasSegundaColumna", JSON.stringify(tomarTareasColumnaDos));
mostrarColumnaUno();
};




function pasarAColumnaTres(valor){
let pasarTareas = JSON.parse(localStorage.getItem("tareasSegundaColumna"));
let auxiliar;

    for(let i = 0; i < pasarTareas.length; i++){
    if(pasarTareas[i].titulo == valor){
      auxiliar = pasarTareas[i];
      }};

guardarColumnaTres(auxiliar);
    for(let i = 0; i < pasarTareas.length; i++){
    if(pasarTareas[i].titulo == valor){
      pasarTareas.splice(i, 1);
      }};

localStorage.setItem("tareasSegundaColumna", JSON.stringify(pasarTareas));
mostrarColumnaDos();
};




function guardarColumnaTres(auxiliar){
  if (localStorage.getItem("tareasTerceraColumna") === null){
    let tareas = [];
    tareas.push(auxiliar);
    localStorage.setItem("tareasTerceraColumna", JSON.stringify(tareas));
    } else {
    let tareas = JSON.parse(localStorage.getItem("tareasTerceraColumna"));
    tareas.push(auxiliar);
    localStorage.setItem("tareasTerceraColumna", JSON.stringify(tareas));
    };
mostrarColumnaTres();
};




function mostrarColumnaTres(){
  var tomarTareasColumnaTres = JSON.parse(localStorage.getItem("tareasTerceraColumna"));
  var mostrarTareasColumnaTres = document.getElementById("columna3");

  mostrarTareasColumnaTres.innerHTML = "";

  for(let i = 0; i < tomarTareasColumnaTres.length; i++){
      let titulo = tomarTareasColumnaTres[i].titulo;
      let descripcion = tomarTareasColumnaTres[i].descripcion;

      mostrarTareasColumnaTres.innerHTML += `
      <div class="col s12 m7 tarjetaTarea">
      <div class="card horizontal">
      <div class="card-stacked">
      <div class="card-content">
        <h5 class="header">${titulo}</h5>
        <p>${descripcion}</p>
      </div>
      </div>
      <button class="card-image red lighten-1" onclick="eliminar('${titulo}');">
        <i class="fas fa-times"></i>
      </button>
      </div>
      </div>
      `;

        Sortable.create(mostrarTareasColumnaTres, {
        animation: 150,
        onEnd:() => {},
        group: 'ordenColumnaTres',
        store: {
        //Guardamos el orden de la lista
        set: (sortable) => {
          const orden = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, orden.join('|'));
        },
        //Obtenemos el orden de la lista
        get: (sortable) => {
        const orden = localStorage.getItem(sortable.options.group.name);
        return orden ? orden.split('|') : [] ;
        }}})   
  }
localStorage.setItem("tareasTerceraColumna", JSON.stringify(tomarTareasColumnaTres));
};




function eliminar(tareas){
  var eliminarTareaColumnaUno = JSON.parse(localStorage.getItem("tareasPrimeraColumna"));
  var eliminarTareaColumnaDos = JSON.parse(localStorage.getItem("tareasSegundaColumna"));
  var eliminarTareaColumnaTres = JSON.parse(localStorage.getItem("tareasTerceraColumna"));

  for(i = 0; i < eliminarTareaColumnaUno.length; i++){
      if (eliminarTareaColumnaUno[i].titulo == tareas){
      eliminarTareaColumnaUno.splice(i, 1);
      }};

  for(i = 0; i < eliminarTareaColumnaDos.length; i++){
      if (eliminarTareaColumnaDos[i].titulo == tareas){
      eliminarTareaColumnaDos.splice(i, 1);
      }};

  for(i = 0; i < eliminarTareaColumnaTres.length; i++){
      if (eliminarTareaColumnaTres[i].titulo == tareas){
      eliminarTareaColumnaTres.splice(i, 1);
      }};
localStorage.setItem("tareasPrimeraColumna", JSON.stringify(eliminarTareaColumnaUno));
localStorage.setItem("tareasSegundaColumna", JSON.stringify(eliminarTareaColumnaDos));
localStorage.setItem("tareasTerceraColumna", JSON.stringify(eliminarTareaColumnaTres));
mostrarColumnaUno();
mostrarColumnaDos();
mostrarColumnaTres();
};




mostrarColumnaUno();
mostrarColumnaDos();
mostrarColumnaTres();