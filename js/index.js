const lector = require('./reader');
const sabio = require('./analizer');

lector.leerArchivo('../el_quijote.txt', (error, texto) => {
  if (error) {
    console.error('¡Error!', error);
    return;
  }

  console.log('--- 📊 ANÁLISIS DEL PERGAMINO ---');
  console.log(`Caracteres: ${sabio.contarCaracteres(texto)} (sin signos de puntuación)`);
  console.log(`Palabras totales: ${sabio.contarPalabras(texto)} (sin signos de puntuación)`);
  console.log('Top 10 palabras clave:');
  console.table(sabio.top10Palabras(texto)); 
});