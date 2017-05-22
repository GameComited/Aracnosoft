function crearDB() {
    db = window.openDatabase("Database", "1.0", "Base de datos", 2 * 1024 * 1024);
    db.transaction(creartabla, errorCB, successCB);
};
function creartabla(tx) {
 // tx.executeSql('DROP TABLE IF EXISTS DEMO');
tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (nombre, email, telefono)');
};

function errorCB(err) {
    alert("Error procesando el SQL: " + err.code);
};

function successCB() {
    alert("Base de datos creada correctamente");
};