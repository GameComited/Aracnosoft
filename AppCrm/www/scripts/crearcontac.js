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

        db = window.openDatabase("Database", "1.0", "Cordova Demo", 2 * 1024 * 1024);
        db.transaction(createDB, errorCB, successCB);
        document.getElementById('botonguardar').addEventListener('click', submitForm, false);
    }

    function createDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS Contactos');
        tx.executeSql('CREATE TABLE IF NOT EXISTS Contactos (nombre, email, telefono)');

    }

    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }

    function successCB() {
        //alert("YEAH!!!!");
    }

    function insertDB(tx) {
        var _nombre = $("[name='nombre']").val();
        var _email = $("[name='email']").val();
        var _telefono = $("[name='telefono']").val();
        var sql = 'INSERT INTO Contactos (nombre, email, telefono) VALUES (?,?,?)';
        tx.executeSql(sql, [_nombre, _email, _telefono], sucessQueryDB, errorCB);

    }

    function sucessQueryDB(tx) {
        alert("valores guardados en tabla");

        //tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    //function renderList(tx, results) {
    //    var htmlstring = '';

    //    var len = results.rows.length;

    //    for (var i = 0; i < len; i++) {
    //        htmlstring += '<li>' + results.rows.item(i).title + '</li>';

    //    }

    //    $('#resultList').html(htmlstring);
    //    $('#resultList').listview('refresh');


    //}

    function submitForm() {
        db.transaction(insertDB, errorCB);
        window.location.href = 'contactos.html';
        return false; 
    }





    //var db;

    //function onDeviceReady() {

    //    var db = openDatabase('baseDatos', '', 'Base de Datos', 5 * 1024);
    //    db.transaction()

    //    document.getElementById('botonguardar').addEventListener('click', Gdatos , false);
    //};

    //function errorCB(err) {
    //    alert("Error procesando SQL: " + err.code);

    //};

    //function successCB() {
    //    alert("base de datos cargada");

    //};

    //function Gdatos() {
    //    db.transaction(function (tx) {
    //        tx.executeSql('create table if not exists Contactos(nombre, email, telefono)');
    //        tx.executeSql('insert into Contactos(nombre, email, telefono) values (?,?,?)', ["jose", "doval@doval.com", 670001133]);

    //    }, errorCB, successCB);
    //    //var _nombre = tx.executeSql('select name, email, telefono, from Contactos where name = jose');
    //};

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

})();