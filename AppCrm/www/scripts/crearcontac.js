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

        // conectamos con la base de datos
        db = window.openDatabase("BasedeDatos", "1.0", "CRM DB", 5 * 1024 * 1024);

        // recogemos los parametros de la barra de direcciones 
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

        // guardamos en una variable los parametros recogidos desde la  barra de direcciones
            var _id = getUrlParameter('id');
            var _empresa_ = getUrlParameter('empresa');

        // si el id es diferente a vacio y la empresa es diferente a vacio (vamos que tienen datos ) pues guardamos el dato en el localStorage y modificamos varios elementod del DOM
            if ( _id != null && _empresa_ != null ){

               // alert(_id);
                localStorage.setItem("idcont", _id);

                $("#tituloCrearContacto").html("Modifica el contacto: " + _empresa_);
                $("#botonguardar").html("Modificar");
                //jQuery(this).prev("button").attr("id", "botonmodificar");
                //document.getElementById('botonmodificar').addEventListener('click', modificarForm, false);

            };


        //Cuando clickeen en el boton de guardar ejecutamos la funcion sumitform
        document.getElementById('botonguardar').addEventListener('click', submitForm, false);
    }

 
    function insertDB(tx) {
        // Guardamos en variables los valores de los campos del formulario con sus respectivos nombres
        var _empresa = $("[name='empresa']").val();
        //alert(_empresa);
        var _email = $("[name='email']").val();
        //alert(_email);
        var _telefono = $("[name='telefono']").val();
        //alert(_telefono);
        var _pais = $("[name='pais']").val();
        //alert(_pais);
        var _direccion = $("[name='direccion']").val();
        //alert(_direccion);
        var _ciudad = $("[name='ciudad']").val();
        //alert(_ciudad);
        var _provincia = $("[name='provincia']").val();
        //alert(_provincia);
        var _codigop = $("[name='codigop']").val();
        //alert(_codigop);
        var _perCon = $("[name='perCon']").val();
        //alert(_perCon);
        var _dni = $("[name='dni']").val();
        //alert(_dni);
        var _anotacion = $("[name='anotacion']").val();
        //alert(_anotacion);
        //insertamos los valores en la tabla Contatos
        var sql = 'INSERT INTO Contactos (empresa, email, telefono, pais, direccion, ciudad, provincia, codigop, perCon, dni, anotacion) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
        tx.executeSql(sql, [_empresa, _email, _telefono, _pais, _direccion, _ciudad, _provincia, _codigop, _perCon, _dni, _anotacion], sucessQueryDB, errorsub2CB);
    }

    function errorsub2CB(er) {
        //alertamos en caso de erros ejecutando la funcion sumitform
        alert('Error insertando los datos: ' + er.code);
    };

    function sucessQueryDB(tx) {
        //alert('exito insertando en contactos');
        window.location.href = 'contactos.html';
        //tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    //funcion con la que llamaremos a la funcion de insertar variables en la tabla y redireccion de la pagina
    function submitForm() {
        // recogemos en una variables el valor idcont que guardamos antes en el localStorage
        var botonmodificar = localStorage.getItem("idcont");
        // si este valor es diferente a vacio entonces ejecutamos este codigo 
        if (botonmodificar != null) {
            alert("vas a modificar el contacto");
            localStorage.removeItem("idcont");
       // si este valor esta vacio entonces significa que es un contacto nuevo y seguimos con e la funcion
        } else {
            // realizamos la transaccion (vamos para la funcion insertDB)
            db.transaction(insertDB, errorsubCB);
            return false;
        }
    }

    function errorsubCB(e) {
        //alertamos en caso de erros ejecutando la funcion sumitform
        alert('Error insertando los datos: ' + e.code);
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

})();