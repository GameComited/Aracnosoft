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
        //tx.executeSql('DROP TABLE IF EXISTS DEMO');
        //tx.executeSql('DROP TABLE IF EXISTS Contactos');
        tx.executeSql('CREATE TABLE IF NOT EXISTS Contactos (empresa, email, telefono, pais, direccion, ciudad, provincia, codigop, perCon, dni, anotacion)');

    }

    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }

    function successCB() {
        //alert("YEAH!!!!");
    }

    function insertDB(tx) {
        var _empresa = $("[name='empresa']").val();
        var _email = $("[name='email']").val();
        var _telefono = $("[name='telefono']").val();
        var _pais = $("[name='pais']").val();
        var _direccion = $("[name='direccion']").val();
        var _ciudad = $("[name='ciudad']").val();
        var _provincia = $("[name='provincia']").val();
        var _codigop = $("[name='codigop']").val();
        var _perCon = $("[name='perCon']").val();
        var _dni = $("[name='dni']").val();
        var _anotacion = $("[name='anotacion']").val();
        var sql = 'INSERT INTO Contactos (empresa, email, telefono, pais, direccion, ciudad, provincia, codigop, perCon, dni, anotacion) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
        tx.executeSql(sql, [_empresa, _email, _telefono, _pais, _direccion, _ciudad, _provincia, _codigop, _perCon, _dni, _anotacion], sucessQueryDB, errorCB);

    }

    function sucessQueryDB(tx) {
        alert("valores guardados en tabla");

        //tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    function submitForm() {
        db.transaction(insertDB, errorsubCB);
        window.location.href = 'contactos.html';
        return false; 
    }

    function errorsubCB(e) {
        alert('Error insertando los datos: ' + e.code);
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

})();