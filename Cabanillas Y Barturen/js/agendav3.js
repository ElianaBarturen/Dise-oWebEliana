function guardarDato(){
    var nombre = document.getElementById("nombre").value; /* crear variable y guardarlo */
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    
    const datos = { /*guarda dos subvariables*/
        'movil': movil,
        'email': email,
    }

    localStorage.setItem(nombre, JSON.stringify(datos)); /* guardar datos, (JSON) unir variables y guardar como cadena de texto*/

    document.getElementById("nombre").value=""; /* limpiar el txt*/
    document.getElementById("movil").value="";
    document.getElementById("email").value="";

    actualizarDatos();
}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value; /* capturar nombre para recuperar sus datos */

    let datos = localStorage.getItem(nombre); /*guardar datos/datos = JSON.parse(datos); /* separando los valores que hemos capturado en esa variable: movil e email se separa*/

    document.getElementById("movil").value = datos.movil; /* se saca de datos, y se almacena en cada uno*/
    document.getElementById("email").value = datos.email;

}                                                                                                                                                                                                                                                                                       

function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();

    document.getElementById("nombre").value=""; /* limpiar el txt*/
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
}                            

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro="";
    if(localStorage.length===0){
        registro +='<li>Vacio</li>';
    } 
    else{
        for(var i=0; i<=localStorage.length -1; i++){
            var key = localStorage.key(i);
            let datos = localStorage.getItem(key); /almacenar los datos en una variable/
            datos = JSON.parse(datos); /* */

            registro += `<li> <span class="nom"> ${key} </span> 
                              <span class="nom"> ${datos.movil} </span> 
                              <span class="nomemail"> ${datos.email} </span> 
                        </li><br>`; 
        }   
    }
    document.getElementById('contactos').innerHTML=registro;
}
function soloLetras(evt){
    var charCode = (evt.charCode);

    if ((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        document.getElementById("aviso").innerHTML = "";
        return true;
    }else{
        /*alert("Ingrese solo letras"); */
        document.getElementById("aviso").innerHTML = "¡ATENCION! Ingrese solo letras"
        return false;
    }
}
function soloNumeros(evt){
    var charCode = (evt.charCode);

    if (charCode>=48 && charCode<=57) {
        document.getElementById("aviso").innerHTML = "";
        return true;
    }else{
        /*alert("Ingrese solo letras"); */
        document.getElementById("aviso").innerHTML = "¡ATENCION! Ingrese solo Numeros"
        return false;
    }
}