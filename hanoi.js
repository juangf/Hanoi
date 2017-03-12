/*

 Resolver Torre de Hanoi de N discos

     Columna         Columna
    origen A        destino B        Columna C

        |               |                |
        |               |                |
       [1]              |                |
      [ 2 ]             |                | 
     [  3  ]            |                | 
    [   N   ]           |                |
   ============================================

*/

let moverdisco = (discoN, origen, destino, solucion) => {
    solucion.listaMovimientos.push({
        disco: discoN,
        origen: origen,
        destino: destino
    });
}

let hanoi = (discoN, origen, destino, intercambio, solucion) => {
    if (discoN === 1) moverdisco(1, origen, destino, solucion);
    else {
        hanoi(discoN-1, origen, intercambio, destino, solucion);
        moverdisco(discoN, origen, destino, solucion);
        hanoi(discoN-1, intercambio, destino, origen, solucion);
    }
}

let resolverHanoy = (numdiscos, origen, destino, intercambio) => {
    let solucion = {
        listaMovimientos : []
    };
    
    hanoi(numdiscos, origen, destino, intercambio, solucion);

    return solucion;
}

// Número de discos de la torre
let numeroDiscos = 3;

// Calcular la solución
let solucion = resolverHanoy(numeroDiscos, 'Origen A', 'Destino B', 'C');

// Presentar la solución 
let numeroMovimientos = solucion.listaMovimientos.length;

console.info('Movimientos :');

for (let i=0; i < numeroMovimientos; i++) {
    let mov = solucion.listaMovimientos[i];

    console.log('Mover disco', mov.disco, 'de columna', mov.origen, 'a la columna', mov.destino);
}

console.info('Número de movimientos necesarios :', numeroMovimientos);