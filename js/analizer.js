const {limpiarTexto} = require('./utils');

function contarCaracteres(texto) {
  return texto.length;
}

function contarPalabras(texto) {
 return limpiarTexto(texto, false).length;
}

function top10Palabras(texto) {
  // Reutilizamos la misma lógica aquí también
  const palabras = limpiarTexto(texto, true);
  const contador = {};
  
  for (let palabra of palabras) {
    contador[palabra] = (contador[palabra] || 0) + 1;
  }
  
  return Object.entries(contador)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
}

function buscarPalabraEspecifica(texto, palabra) {
  
  const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
  const coincidencias = texto.match(regex);
  
  return coincidencias ? coincidencias.length : 0;
}
module.exports = { contarCaracteres, contarPalabras, top10Palabras, buscarPalabraEspecifica };