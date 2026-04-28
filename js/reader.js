const fs = require('fs');
const path = require('path');

function leerArchivo(nombreArchivo, callback) {
  const ruta = path.join(__dirname, nombreArchivo);
  fs.readFile(ruta, 'utf8', callback);
}

module.exports = { leerArchivo };
