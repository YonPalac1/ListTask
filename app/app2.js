document.querySelector(".editar").addEventListener("click", guardarTitulo);
document.getElementById("desplegarForm").addEventListener("click", mostrarForm);

async function guardarTitulo() {
    const {value: nuevoTitulo} = await Swal.fire({
    text: 'Ingrese un titulo para su lista',
    input: 'text',
    inputPlaceholder: 'nuevoTitulo',
   allowOutsideClick: false
    })
  var guardarTitulos = []
    
  if(nuevoTitulo === ""){
    return false;
  }


  if(nuevoTitulo == ""){
    return false;
    }else if (nuevoTitulo === null){
    return false;
    }
  guardarTitulos.push(nuevoTitulo);

localStorage.setItem("Titulos", JSON.stringify(guardarTitulos));
mostrarTitulo();
};

function mostrarTitulo(){
  var titulos = JSON.parse(localStorage.getItem("Titulos"));
  var agregarTitulo = document.getElementById("nuevoTitulo");

  if(localStorage.getItem("Titulos") === null){
  	agregarTitulo.innerHTML;
    }else{
  	agregarTitulo.innerHTML = titulos;
    }
};


function mostrarForm(){
  var tarjeta = document.getElementById("tarjeta");

  if(tarjeta.style.display === "none"){
  tarjeta.style.display = "block";
  }else{
  tarjeta.style.display = "none";
  }
};



mostrarTitulo();
