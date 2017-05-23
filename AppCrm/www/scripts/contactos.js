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
        db.transaction(createDB, errorCB, successCB);
    };

    function successCB() {
        alert("La base de datos se ha consultado ya!");

    }

    function createDB(tx) {
       // tx.executeSql('DROP TABLE IF EXISTS Contactos');
        tx.executeSql('CREATE TABLE IF NOT EXISTS Contactos (empresa, email, telefono)');
        tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }

    function renderList(tx, results) {
        var htmlstring = '';

        var len = results.rows.length;

        for (var i = 0; i < len; i++) {
            htmlstring += '<li>Empresa: ' + results.rows.item(i).empresa + 'Contacto: ' + results.rows.item(i).perCon + ' Tlf: ' + results.rows.item(i).telefono +'</li>';

        }

        $('#listaresultado').html(htmlstring);
    }

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();