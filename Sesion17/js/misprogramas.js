$(document).ready(function(){
    $("a").click(function(evento){
        alert("has pulsado el enlace.Ahora serás enviado a la pagina USAT")
    });

});

$("#cb1").click(function(){
$("cont1").toggle(1500);
} ,function(){
    $("#cont1").toggle(1500);
});