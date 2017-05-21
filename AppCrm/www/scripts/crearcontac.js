// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    

    function onDeviceReady() {

        var db = window.openDatabase( "test", "1.0", "Test DB", 1000000 );
        db.transaction(createDB, errorCB, successCB);

    };

    function createDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (nombre, email, telefono)');
    }

    function errorCB(err) {
        alert("Error procesando el SQL: " + err.code);
    }
    function successCB() {
        alert("Base de datos creada correctamente");
    }

    function insertDB(tx) {
        var _nombre = $("[name='nombre']").val();
        var _email = $("[name='email']").val();
        var _telefono = $("[name='telefono']").val();
        var sql = 'INSERT INTO DEMO (nombre, email, telefono) VALUES (?,?,?)';
        tx.executeSql(sql, [_nombre, _email, _telefono], successquerryDB, errorCB);
    }

    function successquerryDB(tx) {
        alert("consulta correcta");
        tx.executeSql('SELECT * FROM DEMO', [], renderList, errorCB);
    }

    function submitForm() {
        db.transaction(insertDB, errorCB);
        window.location.href = "contactos.html";
        return false;
    }

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();