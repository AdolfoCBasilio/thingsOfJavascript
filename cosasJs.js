const arreglo = [1, 2, 3, 4];
/*Diferencia entre arreglos y objetos */

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

//forEach solo es recorrido de elementos para arreglos
// arreglo.forEach(element => {
//     console.log(element)
// });


// const object = {a:1,b:2,c:3}; es un recorrido para objetos
// for (const property in object) {
//     console.log(`${property} : ${object[property]}`);
// }

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



/*--------------------------------------------------------------------------*/
// //MAPA
// let mapa = new Map();
// mapa.set("juan",10);
// const data =mapa.get("juan");  //10
// console.log(data)
// mapa.clear();//limpia
// mapa.delete("juan"); //borra
// mapa.has("juan"); //true

// //SET
// let calificaciones = new Set();
// calificaciones.add(10);
// calificaciones.add(8);
// calificaciones.add(5);
// calificaciones.add(10);//no lo agrega porque existe

// let elementos = calificaciones.entries();
// elementos.next().value;//retorna 7 si [7,8]
// elementos.next().value;//retorna 8 si [7,8]

//39

/*--------------------------------------------------------------- */
//CADENAS DE TEXTO
// const texto="hola"
// console.log(texto.length)//da la longitudad inicia en 1
// // console.log(texto[1])

// console.log(texto.indexOf("h"));//retorna la primera conincidencia
// console.log(texto.lastIndexOf("a"));//retorna la ultima coincidencia
// console.log(texto.slice(0,4));//muestra solo dentro del rango de slice (indice, final)
// console.log(texto.substr(0,2));//substrae una cadena de texto (indice, numero de caracteres totales)

// const nuevo = texto.replace("hola","amigos");//remplaza un texto
// console.log(nuevo);

// console.log(texto.toUpperCase())
// console.log(texto)
// console.log(texto.toLowerCase())

// let concatenado = nuevo.concat(' ',texto)
// console.log(concatenado)//une dos textos

// let separado = " hola separado ";
// console.log(separado.trim())//quita espacios vacios
// console.log(separado.split(' '))// separa donde indique ' '

// for (let i = 0; i < texto.length; i++) {//hace recorrido por letra
//     const item = texto[i];
//     console.log(item)
// }
// const texto2=[1,2,3,4,5] //para arreglos y puede guardar en nuevo array
// texto2.forEach(element => {
//     console.log(element)
// });

// console.log(typeof(texto))//typeof

/* -------------------------------------------------------- */
//OBJETOS #43

// const letras=['hola','cosa','fea','usuarios'];
// const otras='otras'
// console.log((letras.concat(otras)))


/* this */
// refernete a un oobjeto


// call apply &  bind

//==================================================================================================> DOM

// const mostrarMensaje = ()=>{
//     console.log('hola mensaje ')
// }

// const boton = document.querySelector('#boton');
// let contador = 0;

// boton.addEventListener('click', e=>{
//     console.log(e);
//     contador++;
//     e.target.textContent=`Se han dado ${contador} Clicks`
// });

// document.querySelector('body').addEventListener('mousemove',e=>{
//     document.querySelector('#respuesta').textContent = `aqui las ${e.pageX} - ${e.pageY}`;

// });

// const playera = document.querySelector('#edificio');
// let pegado = false;
// window.addEventListener('mousemove',e=>{
//     if(pegado){
//         const x= e.pageX - (playera.width/2);
//         const y=e.pageY - (playera.height/2);

//         playera.style.position = 'relat ive';
//         playera.style['left'] = x + 'px';
//         playera.style['top'] = y + 'px';
//         console.log('evento mouse',e)
//     }
// })

// playera.addEventListener('click',e=>{
//     pegado= !pegado;
//     console.log('click en playera')
// })


//===============================================(FOR)
//for y forEach iguales no guardan / map() guarda en nuevo array / forin itera sobre todo/ forof solo sobre lo primero sin adicionales















//=========================================>FORMULARIO JS

// let respuestas = {
//     nombre: '',
//     lenguajes: [],
//     nivel: '',
//     pais: ''
// };

// //SE ITERA POR CADA VALOR DESPUES DEL CLICK
// const boton = document.querySelector('#boton');
// boton.addEventListener('click', e => {
//     e.preventDefault(e);
//     console.log('respuestas', respuestas);

//     const respuesta = document.querySelector('#respuesta');
//     respuesta.innerHTML = ``;
//     for (prop in respuestas) {//itera sobre elementos nuevos en objetos
//         respuesta.innerHTML += `${prop}: ${respuestas[prop]}<br>`
//     }

//     lenguajes.forEach(element => {//checked==false
//         element.checked = false;
//     });
//     inputNombre.value = "";//set valor input en ''
// })


// //se agrega el valor de input en respuestas.nombre
// const inputNombre = document.querySelector('#nombre');
// inputNombre.addEventListener('input', e => {
//     respuestas.nombre = inputNombre.value;
// })

// //se recorre el arreglo de input y se ve cual esta activo
// const lenguajes = document.querySelectorAll('input[type=checkbox]');
// lenguajes.forEach(lenguaje => {
//     lenguaje.addEventListener('click', e => {
//         getLenguajes();
//     })
// });

// function getLenguajes() {
//     respuestas.lenguajes = [];
//     const items = document.querySelectorAll('input[type=checkbox]:checked');
//     items.forEach(item => {
//         respuestas.lenguajes.push(item.value);
//     })
// }

// const niveles = document.querySelectorAll('input[type=radio]');
// niveles.forEach(nivel => {
//     nivel.addEventListener('click', e => {
//         respuestas.nivel = e.target.value;
//     })
// })


// const pais = document.querySelector('#pais');
// pais.addEventListener('change', e => {
//     respuestas.pais = e.target.value;
// })

// const bPais = document.querySelector('#bPais');
// bPais.addEventListener('click', e => {
//     const texto = document.querySelector('#itPais').value;
//     e.preventDefault();
//     if (texto == '') return false;
//     const option = document.createElement('option');
//     option.value = texto;
//     option.text = texto;
//     pais.add(option);
// })


// //CLAUSURA
// const suma = (n1) => {
//     return sumados = (n2) => {
//         return n1 + n2;
//     }
// }
// let res = suma(10);
// console.log(res(5))

// //this & scope
// let tuit = {
//     likes:10,
//     rt:20,
//     getLikes: function () { return console.log(this.likes)},
//     getRt: ()=>{ return console.log(tuit.rt)}
// }
// tuit.getLikes();
// tuit.getRt();

//CALL APPLY Y BIND
// const user = {
//     name:'Marcos'
// };

// const business={
//     name: 'Headbook'
// }

// function showInfo(likes , friends) {
//     return `${this.name} tiene ${likes} likes y ${friends} amigos`
// }
// console.log(showInfo.call(business,10, 100));
// console.log(showInfo.apply(user,[10, 100]));

// const newFuntion = showInfo.bind(user);
// console.log(newFuntion(10,100))

//Desestrcuturacion
// let kk = {
//     altura: 160,
//     colorPelo: "blanco"
// };
// let { altura, colorPelo } = kk;
// console.log('ALTRUA', altura, 'COLOR', colorPelo);

// let personajes = [
//     {
//         altura: 100,
//         color_pelo: "amarillo",
//         chaleco: {
//             color: "verde"
//         }
//     },
//     {
//         altura: 1000,
//         color_pelo: "verde",
//         chaleco: {
//             color: "verde"
//         }
//     },
//     {
//         altura: 10,
//         color_pelo: "azul",
//         chaleco: {
//             color: "azul"
//         }
//     }
// ];

// let [isabel, nook, kk] = personajes;
// console.log(isabel.altura, nook.altura, kk.altura);








//PROGRAMACION ORIENTADA A OBJETOS POO
// class Alumno {
//     #nombre;
//     #edad;

//     constructor(nombre, edad) {
//         console.log('hola constructor ' + nombre + ' edad: ' + edad);
//         this.#nombre = nombre;
//         this.#edad = edad;
//     }

//     saludo = function () {
//         console.log(this.#nombre)
//     }

//     get nombre() {
//         return this.#nombre;
//     }
//     set nombre(valor) {
//         this.#nombre = valor;
//     }
// }

// const alumno = new Alumno('Adolfo', 27);

// alumno.saludo()
// console.log(alumno.nombre)


// //ECMS6 y su poo
// class Alumno {
//     #matricula;
//     #nombre;
//     #edad;
//     constructor(matricula, nombre, edad) {
//         this.#nombre = nombre;
//         this.#edad = edad;
//         this.#matricula = matricula;
//     }

//     saludar() {
//         return `Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} ${this.#matricula}`
//     }

//     get matricula() {
//         return this.#matricula
//     }
//     get nombre() {
//         return this.#nombre
//     }
//     get edad() {
//         return this.#edad
//     }

//     set matricula(valor) {
//         this.#matricula = valor
//     }
//     set nombre(valor) {
//         this.#nombre = valor
//     }
//     set edad(valor) {
//         this.#edad = valor
//     }
// }

// const alumno = new Alumno('a01', 'adolfo', 10);
// console.log(alumno.saludar());



// //primero se hacia asi con funciones 
// function Alumno2(matricula, nombre, edad) {
//     this.matricula = matricula;
//     this.nombre = nombre;
//     this.edad = edad;

//     this.saludar = function () {
//         return `Hola!!! mi nombre es ${this.nombre} y tengo ${this.edad}`;
//     }
//     this.getMatricula = function () {
//         return this.matricula;
//     }
//     this.getNombre = function () {
//         return this.nombre;
//     }
//     this.getEdad = function () {
//         return this.edad;
//     }
//     this.setMatricula = function (valor) {
//         this.matricula = valor;
//     }
//     this.setNombre = function (valor) {
//         this.nombre = valor;
//     }
//     this.setEdad = function (valor) {
//         this.edad = valor;
//     }
// }

// const alumno2 = new Alumno2('A02','ADOLFO',35);
//  console.log(alumno2.saludar())

//  //Simula una clase pero es objeto
//  const alumno3= {
//      matricula:'A03',
//      nombre:'adolfo3',
//      edad:27,
//      saludar: function () {
//          return `hola 3!!! mi nombre es ${this.nombre}  y tengo ${this.edad} y mi id es ${this.matricula}`
//      }
//  }
//  console.log(alumno3.saludar());














//  //Onjetos globales
//  const calificaciones1 = [1,2,3];
//  const calificaciones2 = new Array (1,2,3); 

//  console.log(calificaciones1);
//  console.log(calificaciones2);

//  const alumno1 =  {nombre:'marcos'};
//  const alumno2 = new Object({nombre:'otro alumno'});

//  console.log(alumno1);
//  console.log(alumno2);

//  const numero1=55;
//  const numero2= new Number(55);

//  console.log(numero1);
//  console.log(numero2);
//  console.log(typeof numero1, typeof numero2);













//  //Pasar por valor y referencia
// // let edades= [28,30 , 32];
// // let edades2 = edades;
// // edades.push(34);

// // console.log(edades)

// let numeros=[1,2,3,4];
// let numeros2=[...numeros];//opcion 1 <==
// let numeros3 = Array.from(numeros);//opcion 2 <===
// console.log(numeros)
// console.log(numeros2)
// console.log(numeros3)

// let objeto1={}
// let objeto2 = {...objeto1}
// let objeto3= Object.assign({},objeto1)


// //Valor nulo cero o undefined

// // non = tiene contenido;
// // 0 = valor es 0 
// // null = no hay nada dentro
// // undefined= no existe;

// //operador coalescente nulo
// //expresion ?? expresionn

// const valorNulo = null;
// const textoVacio = "";
// const numero =42;

// const valA= valorNulo ?? "default para A";
// const valB= textoVacio ?? "default para B";
// const valC= numero ?? 0;

// //ENCADENAMIENTO OPCIONAL 
// const user ={
//     nombre:'marcos'
// }
// if(user.location && user.location.city){
//     return user.location.city;
// }else{
//     return undefined;
// }
// console.log(user.location?.city); //sera igual a undefined
// console.log(user.location.city);


// //valor nulo 













class Http{
    async get (url){
        try{
            const res = await fetch(url);
            return res;
        }catch{
            return null;
        }  
    }
}

const http = new Http();
(async ()=>{
    
    const res= await http.get('http://localhost:3000')
    
    if(res===null){
        console.log('el objeto esta vacio')
    }else{
        const data = await res.json();
        console.log(data);
    }
})();

// const http = new Http();
// http.get('http://localhost:3000')
// .then(res=>{
//     if(res===null){
//         console.log('errror el objeto esta vacio')
//     }else{
//         return res.json();
//     }
// })
// .then(data=>{
//     console.log('data',data)
// })