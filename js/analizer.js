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
function longitudMediaPalabras(texto) {
  // Obtenemos las palabras reales (sin filtrar las comunes, pero sí limpiando signos)
  const palabras = limpiarTexto(texto, false);
  
  if (palabras.length === 0) return 0;

  // Sumamos la longitud de cada palabra
  const sumaLongitudes = palabras.reduce((acumulador, palabra) => {
    return acumulador + palabra.length;
  }, 0);

  // Calculamos la media y redondeamos a 2 decimales
  const media = sumaLongitudes / palabras.length;
  return Number(media.toFixed(2));
}
module.exports = { contarCaracteres, contarPalabras, top10Palabras, buscarPalabraEspecifica, longitudMediaPalabras };