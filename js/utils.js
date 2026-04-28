const STOP_WORDS = new Set([
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
  'de', 'del', 'al', 'a', 'en', 'y', 'o', 'u', 'que', 'qué',
  'por', 'para', 'con', 'sin', 'sobre', 'su', 'sus', 'es', 'son',
  'lo', 'le', 'les', 'me', 'se', 'mi', 'tu', 'te', 'ti', 'si', 'no',
  'ni', 'ya', 'tan', 'muy', 'todo', 'todos', 'esta', 'este', 'esto'
]);

function limpiarTexto(texto, filtrar = false) {
  return texto
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, "")
    .split(/\s+/)
    .filter(p => {
      const esValida = p.length > 1;
      if (!filtrar) return esValida;
      return esValida && !STOP_WORDS.has(p);
    });
}

module.exports = { limpiarTexto };