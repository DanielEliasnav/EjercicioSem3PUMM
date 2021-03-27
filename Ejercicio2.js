/**
 * Crea una variable que tenga tu nombre como valor
 */
 const nombre=  "Daniel";

/**
 * Crea otra variable que tenga tu edad como
 * valor
 */
const edad = '13';
/**
 * Crea un arreglo con cosas que te gusten
 * hacer, por ejemplo
 * ['leer', 'correr', 'jugar con amigos']
 */
const intereses = ["correr", "jugar videojuegos", "comer"];
/**
 * Utilizando console.log, escribe un string a la consola
 * usando interpolación que funcione como un saludo.
 * En este string deberás utilizar las variables
 * de edad y nombre y accesar los valores del array
 * para decir lo que te gusta hacer
 * por ejemplo:
 * "Me llamo Fer, tengo 19 años y me gusta
 * estar con mi familia, ir a pasear y acariciar a mi perro"
 */
console.log(`hola mi nombre es ${nombre} tengo ${edad} y me gusta ${intereses[0]} ,  ${intereses [1]} `);
