// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    var db;

    function onDeviceReady() {
        // esta linea es para cojer el valor del localstorage codigo en la variable codigo
        //var codigo = localStorage.getItem('codigo');
        //alert(codigo); 

        db = window.openDatabase("Database", "1.0", "Cordova Demo", 2 * 1024 * 1024);
        db.readTransaction(ConsultarDB, errorCB, successCB);
    };

    function successCB() {
        alert("La base de datos se ha consultado ya!");

    }

    function ConsultarDB() {
        alert("Estamos consultado la base de datos");
    }

    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }


    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();