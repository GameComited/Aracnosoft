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

        db = window.openDatabase("Database", "1.0", "Base de datos", 2 * 1024 * 1024);
        var gua = document.getElementById("botonguardar");
        gua.addEventListener('click', GuardarCampos(), false);
    };

    function insertDB(tx) {
        var _nombre = $("[name='nombre']").val();
        var _email = $("[name='email']").val();
        var _telefono = $("[name='telefono']").val();
        var sql = 'INSERT INTO DEMO (nombre, email, telefono) VALUES (?,?,?)';
        tx.executeSql(sql, [_nombre, _email, _telefono], successquerryDB, errorCB);
    };

    function successquerryDB(tx) {
        alert("consulta correcta");
        tx.executeSql('SELECT * FROM DEMO', [], renderList, errorCB);
    };

    function GuardarCampos() {
        db.transaction(insertDB, errorCB);
        window.location.href = "contactos.html";
        return false;
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();