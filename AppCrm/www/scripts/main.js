// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    
    function onDeviceReady() {
        // Si habilitamos la funcion para usar el mismo html en todas las paginas que tengan el div menubar no funciona el codigo vilculado a los botones del el menubar
        // si se desabilita y se inserta el html pagina por pagina si.
        //$.get('nav.html', function (data) {
        //    $('#menubar').html(data);
        //    //console.log(data);
        //});

        document.getElementById("btnlout").addEventListener('click', Ulogout, false);

        var salute = localStorage.getItem("nombre");
        $("#salute").html("<h3>Bienvenido " +salute+ " .</h3>");
    };

   function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    function Ulogout() {
        var cod = "";
        //alert(localStorage.getItem('codigo'));
        localStorage.removeItem('codigo');
        window.location.href = "index.html";
    }

})();