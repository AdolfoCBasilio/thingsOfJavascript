const arreglo=[1,2,3,4];

// const sumaNan = (num1='1',num2=10)=>{ //funcion con parametros
//     if(isNaN(num1) || num1!==Number){
//         throw new Error('No es un numero');
//     }
//     const respuesta= num1*num2;
//     console.log('la respuesta es: '+' '+respuesta);
// }


// function suma(...numeros){ //recorrido desde varios parametros
//     let res = 0;
//     for(let i= 0; i < numeros.length ; i++){
//         console.log(`el valor de i = ${i}`)
//         res += numeros[i];
//         console.log(`el valor de res  = ${res}`)
//     } 
//     return res;
// }
                                                                    // suma(7,1,2,3,4)

                                                                    // console.log(arreglo)

                                                                    // const busqueda=arreglo.indexOf(12)
                                                                    // console.log(busqueda)

// for (let i = 0; i < arreglo.length; i++) { //seguimiento por indice
//     const element = arreglo[i];
//     console.log('el elemento es : '+element+ ' en la poscicion '+i)
    
// }

/* METODOS EN ECMASCRIPT6 */

//.push() inserta un nuevo elemento al final
//.pop() quita el ultimo elemento de la lista
//.unshift() agrega al inicio de un arreglo
//.shift() quita el primer elemento del arreglo

//.indexof() regresa la poscicion de la primera coincidencia con -1 no existe const busqueda=arreglo.indexOf(12)
//.join(" ") recibe parametro tipo caracter para unir y hacer cadena de texto const text=arreglo.join('+')
// .split("-") separa cada caracter por un "-"

// SORT 
// FLAT
// FIND

//forEach solo es recorrido de elemenots
// arreglo.forEach(element => {
//     console.log(element)
// });

//map reresa un valor a un nuevo arreglo
// const respuestaMap = arreglo.map((valor,indice)=>{
//     return valor *10;
// })
// console.log(respuestaMap,arreglo)

//reduce regresa un resultado unico
// const sumaAcumulador = arreglo.reduce((acumulador, valor) => {
//     return acumulador += valor;
// },0);
// console.log(sumaAcumulador)



//filter regresa un arreglo basadoo en una condicional
// const arregloFilter = arreglo.filter((item)=>{
//     return item < 4;
// })
// console.log(arregloFilter)

//find regresa la primera coincidencia
// const arregloFind= arreglo.find((item)=>{ return item >0})
// console.log(arregloFind)

//some regresa una respuesta booleana
// const resSome= arreglo.some(mensaje=>{
//     return mensaje === 1;
// })
// console.log(resSome)



//flat regresa un arreglo dimensional 
// const parciales =[[10,8],[7,5],[10,10]]
// const output = parciales.flat();
// console.log('flat ouput:',output)

//sort
// const arregloSort = arreglo.sort((a,b)=>{
//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// })
// console.log(arregloSort)