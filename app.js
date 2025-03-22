
/*console.log("Selecciona opcion del menu:");
console.log("Ingresar nombre");
console.log("Buscar nombre");
console.log("Borrar nombre");*/

/* */
document.addEventListener("DOMContentLoaded", function(){



console.log("Bienvenido al sistema de registro ebac");

var form = document.getElementById("registration-form");//se declaran variables para obtener info del formulario
var addbutton = document.getElementById("add-button");//se declaran variables para las acciones de los botones
var consultbutton = document.getElementById("consult-button");
var deletebutton = document.getElementById("delete-button");

form.addEventListener("submit", agregarAlumno);//accion para guardar info
form.style.display="none";//accion para ocultar formulario
addbutton.addEventListener("click", function(event){//accion que realiza el boton al dar click 
    form.style.display = "flex";//muestra el formulario para su llenado
})

consultbutton.addEventListener("click", consultarRegistros);//accion del los botones para llamar la funcion
deletebutton.addEventListener("click", borrarAlumno);


var registro = [ //declara variable registro y con el corchete indica que es un arreglo
//se muestra lista de alumnos por medio de objetos

    {nombre: "Carlos Ayala", edad: "40", zonaResidencia: "mzt", nombrePrograma: "Analista de datos", email: "crls.ayala@gmail.com"},//se ingresan los datos que queremos que se muestren en el arreglo se separa con una coma los datos
    {nombre: "Daniel Ayala", edad: "37", zonaResidencia: "cul", nombrePrograma: "Cientifico de datos", email: "dnl.ayala@gmail.com"},
    {nombre: "David Ayala", edad: "39", zonaResidencia: "gdl", nombrePrograma: "Programador front end", email: "dvd.ayala@gmail.com"},
    {nombre: "Sofia Ayala", edad: "20", zonaResidencia: "lms", nombrePrograma: "Desarrollador full stack java", email: "sofi.ayala@gmail.com"},
    {nombre: "Lizbeth Barrera", edad: "40", zonaResidencia: "Tj", nombrePrograma: "Diseño de interiores", email: "liz.barr@gmail.com"}

];

function agregarAlumno(event){

    event.preventDefault();
    
    
    //se declara funcion que permite agregar datos de nuevos alumnos 
    var nombre = document.getElementById("name-input").value;
    var zonaResidencia = document.getElementById("locality-input").value;
    var edad = document.getElementById("age-input").value;
    var nombrePrograma = document.getElementById("course-input").value;
    var email = document.getElementById("email-input").value;
//crea nuevo objeto que se llama nuevoAlumno
    var nuevoAlumno = {nombre: nombre, zonaResidencia: zonaResidencia, edad: edad, nombrePrograma: nombrePrograma, email: email};//se declara variable donde se almacenara los datos ingresados
    
    registro.push(nuevoAlumno);//agrega los datos de la variable al registro

    //se le otorga un valor a las variables para que el formulario aparezca sin datos
    var nombre = document.getElementById("name-input").value = "";
    var zonaResidencia = document.getElementById("locality-input").value = "";
    var edad = document.getElementById("age-input").value = "";
    var nombrePrograma = document.getElementById("course-input").value = "";
    var email = document.getElementById("email-input").value = "";


    form.style.display = "none";//oculta formulario


}


function consultarRegistros(){
//console.log("edad de sofia: "+registro[3].edad)
    //Este ciclo for itera sobre cada uno de los registros del arreglo
   /* for(var i=0; i<registro.length; i++){//se declara variable i para crear una estructura del arreglo mas presentable
        
        //lista de console.log permite ver al usuario el registro en la consola
        console.log("");
        console.log("Nombre: "+registro[i].nombre); //se concatena el texto con el registro del arreglo indicado despues del punto
        console.log("Edad: "+registro[i].edad);
        console.log("Zona residencia: "+registro[i].zonaResidencia);
        console.log("Programa: "+registro[i].nombrePrograma);
        console.log("Correo electronico: "+registro[i].email);
    };*/

    console.table(registro);//muestra los registros en forma de tabla
}

function borrarAlumno(){//se declara funcion que permite borrar dato o generar un nuevo arreglo que no contenga la informacion del alumno elegido
    var nombreAeliminar = prompt("Escribe el nombre del alumno a eliminar: ");
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);//genera el nuevo arreglo por medio de filter, eliminando el alumno elegido



}

/*
do{ //ciclo que permite la repeticion del menu mientras se cumpla la condicion while

var opcion = prompt("seleccione una opcion: \n1. Ingresar nombre de alumno \n2. Buscar nombre de alumno \n3. Eliminar nombre de alumno \n4. Salir");


if(opcion === "1"){ 
    //alert("Ingrese nombre");
    agregarAlumno();
} else if(opcion === "2"){
    alert("Mostrar registro");
    consultarRegistros();
}else if(opcion === "3"){
    //alert("Eliminar registro");
    borrarAlumno();
}else if(opcion === "4"){
    alert("Saliendo del sistema");
}else{
    alert("Opcion invalida, elige una opcion");
}

    var continuar = prompt("¿Deseas realizar otra accion? (S/N)");


} while(continuar === "s");
*/  

})

