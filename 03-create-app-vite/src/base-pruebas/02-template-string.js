
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre = "Julian"
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );