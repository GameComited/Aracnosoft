// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        var db = openDatabase('baseDatos', '', 'Base de Datos', 5 * 1024);


        db.transaction(function (tx) {
            tx.executeSql('create table if not exists Contactos(nombre, email, telefono)');
            tx.executeSql('insert into Contactos(nombre, email, telefono) values (?,?,?)', ["jose", "doval@doval.com", 670001133];
        }, errorCB, successCB);

        var _nombre = tx.executeSql('select name, email, telefono, from Contactos where name = jose');
        alert(_nombre);

    };


        function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
        };

        function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
        };

})();