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

        db = window.openDatabase("BasedeDatos", "1.0", "CRM DB", 10 * 1024 * 1024);
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
        alert('exito insertando en contactos');
        window.location.href = 'contactos.html';
        //tx.executeSql('SELECT * FROM Contactos', [], renderList, errorCB);
    }

    //funcion con la que llamaremos a la funcion de insertar variables en la tabla y redireccion de la pagina
    function submitForm() {
        db.transaction(insertDB, errorsubCB);
        return false; 
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