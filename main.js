/*
Paso 1: anotar cada libro con sus datos y su cantidad disponible ( autos, año de lanzamiento, editorial y su isbn)
el cliente quiere averiguar si esta disponible o no para retirarlo

paso 2: tengo una lista con los libros y sus datos
				 tengo buscar en esa lista el codigo especifico isbn
				 una vez que lo tengo, ver si esta disponible ( si hay almenos 1)
				 si esta disponible le digo que esta disponible para retirar ( y le quito uno al disponible)
				 si no esta disponible es menor que 1 pongo que no lo esta
*/


const listaDeLibros = [
	{
		nombre: 'Cronicas de cuarentena',
		autor: 'Elsan Judo',
		anioDeLanzamiento: '2020',
		isbn: '1839203948123',
		cantDisponible: 3,
		cantTotales:15,
	},
	{
		nombre: 'Biblioteca gatuna',
		autor: 'Elsan Judo',
		anioDeLanzamiento: '2018',
		isbn: '3749203948123',
		cantDisponible: 1,
		cantTotales:15,
	},
	{
		nombre: 'Descanso interminable',
		autor: 'Elsan Judo',
		anioDeLanzamiento: '2020',
		isbn: '1839203948123',
		cantDisponible: 3,
		cantTotales: 15,
	},
	{
		nombre: 'Colocao como la nicki',
		autor: 'Termo head',
		anioDeLanzamiento: '2019',
		isbn: '7483890637234',
		cantDisponible: 1,
		cantTotales: 15,
	},
	{
		nombre: 'Threat level midnight',
		autor: 'Michael Scott',
		anioDeLanzamiento: '2011',
		isbn: '2934856123979',
		cantDisponible: 4,
		cantTotales:15,
	},
] 
console.log (listaDeLibros)


function restarCantidad (listaDeLibros) {
	cantRestada = 0
	if (listaDeLibros.cantDisponible > 0) {
		cantRestada = listaDeLibros.cantDisponible - 1
	}
	return cantRestada
}

const codigoABuscar = '2934856123979' //ingresar el codigo del libro buscado

function buscarLibro (listaDeLibros,codigoABuscar){
	
	const libroDisponible = []

	for (var i = 0 ; i < listaDeLibros.length; i++) {
		const libros = listaDeLibros[i]

			if (codigoABuscar == libros.isbn) {

    		if (libros.cantDisponible > 0) {
    			libroDisponible.push({
    				isbn: libros.isbn,
    				estado: 'disponible',
    				cantidadesDisponibles: restarCantidad (libros),
    			})
    		} else {
    				libroDisponible.push({
    				isbn: libros.isbn,
    				estado: 'no disponible',

    			})}
    	} 
  }

return libroDisponible

}

const encontrarLibro = buscarLibro (listaDeLibros,codigoABuscar)


console.log (encontrarLibro)

console.log (listaDeLibros) //no logro que me devuelva la lista de libros con las cantidades actualizadas

//tengo que buscar que de alguna forma guarde el resultado de la funcion en la lista principal

// ejercicio 2 buscar por autor

const autorABuscar = 'Elsan Judo'

function buscarPorAutor (listaDeLibros,autorABuscar){
	
	const autorDisponible = []

	for (var i = 0 ; i < listaDeLibros.length; i++) {
		const libros = listaDeLibros[i]

			if (autorABuscar == libros.autor) {
    			autorDisponible.push({
    				nombre: libros.nombre,
    				isbn: libros.isbn,
    				estado: 'disponible',
    				cantidadesDisponibles: restarCantidad (libros),
    			})
    	} 
  }

return autorDisponible

}

const encontrarLibroPorAutor = buscarPorAutor (listaDeLibros,autorABuscar)

console.log(encontrarLibroPorAutor)


// parte 3

// tengo que encontrar los 10 libros mas pedidos
// cada libro tiene una cantidad total en stock, los mas pedidos van a ser los que tengan menos disponible de ese stock
/*Recorro la lista de libros
obtengo la cantidad disponible de cada uno y veo cuales tienen menos disponibles en base a su stock total
devuelvo los 10 libros que menos tengan disponible en stock */

function obtenerLibrosMasPedidos(listaDeLibros) {

  const losMasPedidos = []

  for (let i = 0; i < listaDeLibros; i++) {
    const libros = listaDeLibros[i]

    losMasPedidos.push({
      nombre: libros.nombre,
      cantidadesDisponibles2: libros.cantDisponible,
      cantidadesTotales2: libros.cantTotales,
    })
  }
  
  let TopMasPedidos = losMasPedidos.sort((a,b) => a.cantidadesTotales2-b.cantidadesDisponibles2).slice(0,3)
  //lo hago con el top 3 de libros para probar

  
  return TopMasPedidos

}

let elTopDeLibros = obtenerLibrosMasPedidos(listaDeLibros)

console.log(elTopDeLibros)


/* 
NOTAS:
-	No pude dividir el archivo en -main -utils -tests -index porque por alguna razon, cuando lo hago,
en la consola no me define las cosas, como si no lo tomara

-	No pude hacer que la lista de libros original se vea modificada por las funciones cuando resto un libro (por el alquiler)
 a la cantidad

-	No estoy logrando que me reconozca la lista de los mas pedidos cuando quiero que me los devuelva