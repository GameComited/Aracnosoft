// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    var db = null;

    function onDeviceReady() {
        db = window.sqlitePlugin.openDatabase({ name: 'demo.db', location: 'default' });
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
            tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
            tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
        }, function (error) {
            console.log('Transaction ERROR: ' + error.message);
        }, function () {
            console.log('Populated database OK');
        });

        db.transaction(function (tx) {
            tx.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function (tx, rs) {
                console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
            }, function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
        });

    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

})();