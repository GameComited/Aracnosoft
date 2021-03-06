﻿// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    var db; 

    function onDeviceReady() {

        //conectamos con la base de datos y establecemos las transacciones crear error y exito
        db = window.openDatabase("BasedeDatos", "1.0", "CRM DB", 5 * 1024 * 1024 );
        db.transaction(createDB, errorCB, successCB);

    };

    function successCB() {
        //nos alerta que se a realizado la consulta bien 
        //alert("La base de datos se ha consultado ya!");
    }

    function createDB(tx) {

        //creamos la tabla Contactos si no existe y seleccionamos todos los campos para luego en renderlist usarlos
        tx.executeSql('CREATE TABLE IF NOT EXISTS Contactos (idcontacto INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, empresa text, email text, telefono text, pais text, direccion text, ciudad text, provincia text, codigop text, perCon text, dni text, anotacion text)');

        tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    function errorCB(err) {
        //nos alerta si no se consulto la tabla bien 
        alert("Error processing SQL: " + err.code);
    }

    //con esta funcion imprimimos en en el dispositivo los resultados que deseamos , en este caso emprea, persona de contacto y telefono
    function renderList(tx, results) {

        var htmlstring = '';

        var len = results.rows.length;
        
        for (var i = 0; i < len; i++) {

            htmlstring += '<li><a href="crearContac.html?id=' + results.rows.item(i).idcontacto + '&empresa=' + results.rows.item(i).empresa + '"><span class="text- success text- center" style="font- size:70 % ">' + results.rows.item(i).empresa + '</span></a></li><li><span style="font- size:60 % ">' + results.rows.item(i).perCon + '</span><span style="font- size:60 % "> &nbsp;&nbsp;' + results.rows.item(i).telefono + '</span></li>';

            //htmlstring += '<button type="button" href="usermodify.html" class="btn btn-default col-xs-12"><span class="text-success text-center" style="font-size:70%">' + results.rows.item(i).empresa + '</span><br><span style="font-size:60%">' + results.rows.item(i).perCon + '</span><span style="font-size:60%"> &nbsp;&nbsp;' + results.rows.item(i).telefono + '</span></button>';
        }

        $("#listaresultado").html(htmlstring);
    }

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();