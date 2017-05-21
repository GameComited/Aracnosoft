// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // esta linea es para cojer el valor del localstorage codigo en la variable codigo
        //var codigo = localStorage.getItem('codigo');
        //alert(codigo); 
        function renderList(tx, results) {
            var htmlstring = '';
            var len = results.rows.length;
            for (var i = 0; i < len; i++) {
                htmlstring += '<li>' + results.rows.item(i).nombre + '<br>' + results.rows.item(i).email + '<br>' + results.rows.item(i).telefono + '</li>';
            }
            $('#listaresultado').html(htmlstring);
            $('#listaresultado').listview('refresh');

        }

    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();