// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    
    function onDeviceReady() {

        //escuchamos por la accion click sobre el boton de cerrar sesion
        document.getElementById("btnlout").addEventListener('click', Ulogout, false);

        //guardamos el nombre que estaba almacenado en el localstorage y creamos una frase de saludo personalizada 
        var salute = localStorage.getItem("nombre");
        $("#salute").html("<h3>Bienvenido " +salute+ " .</h3>");
    };

   function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    // funcion donde borramos las variables y el localstorage para dejar todo limpio y cerrar sesion
    function Ulogout() {
        var cod = "";
        var nom = "";
        var salute = "";
        //alert(localStorage.getItem('codigo'));
        localStorage.removeItem('nombre');
        localStorage.removeItem('codigo');
        window.location.href = "index.html";
    }

})();