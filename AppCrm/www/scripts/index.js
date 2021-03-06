﻿(function () {
    "use strict";
  

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // funcion en la que recogemos los parametros de la url , y los guardamos en una variable 
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var user = getUrlParameter('usuario');
        var passw = getUrlParameter('contrasena');
        //console.log(user);
        //console.log(passw);

        // si usuario y pass son diferentes a null entonces logeamos y si el JSON no tiene error guardamos los parametros que nos pasa como son el codigo y el nombre.

        if (user != null && passw != null) {
            $.get('http://www.miracomovendo.com/extranet/service_login.aspx?usuario=' + user + '&contrasena=' + passw, function (data) {
                var obj = JSON.parse(data);
                if (obj.result != 'OK') {
                    alert('Introduce un email y una contraseña validos !!');
                } else {
                    var cod = obj.cod;
                    var nom = obj.nombre;
                    //guardamos el valor del codigo en el localStorage para usarlo posteriormente
                    localStorage.setItem("codigo", cod);
                    localStorage.setItem("nombre", nom);
                    window.location.href = "home.html";
                };
            });
        };
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();