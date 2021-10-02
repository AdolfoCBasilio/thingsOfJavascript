//*BASICOS DE JS

// shift + option f
// commadn + k + c
// control + option n
// commad + b

//!IF
// let numero = 1;
// if (numero == 1) {
//     console.log('es uno');
// } else {
//     console.log('es diferente de uno');
// }

//!FOR
// for (let i = 0; i <= 10; i++) {
//     console.log(`Estamos en la vuelta: ${i}`)
// }

// !SWITCH-CASE
// let caso = 3;
// switch (caso) {
//     case 1: console.log(`Estamos en el caso Uno`);
//         break;
//     case 2: console.log(`Estamos en el caso Dos`);
//         break;
//     case 3: console.log(`Estamos en el caso Tres`);
//         break;
//     default: console.log(`Este no esta registrado`);
// }


// !WHILE
// while (numero == 1) {
//     console.log(`numero es igual a: ${numero}`);
//     numero += 1;
// }

// !DO-WHILE
// numeroDo = 10
// do {
//     console.log(`El numero vale: ${numeroDo}`);
//     numeroDo -= 5;
//     console.log(`El numero vale: ${numeroDo}`);
// } while (numeroDo == 10);
// console.log(`salio del DoWhile`, `NumeroDo vale: ${numeroDo}`);

// !FUNCIONES (PROCEDIMIENTOS O ACTIVIDADES) no hay tipado extricto al retorno de valor
// function nombre(numero1, numero2){
//     let res= numero1+numero2;
//     imprimir(res);
//     return res;
// }
// function imprimir(dato){
//     console.log('El resultado es:',dato);
// };nombre(1,2);

// const iniciar = function(dato1,dato2){
//     let sum= dato1+dato2;
//     imprimir(sum);
// };iniciar(20,1);

// const resta = (valor1,valor2) =>{
//     let res=valor1-valor2;
//     imprimir(res);
// }; resta(40,10);

//!video 21 switch case optimizado;
//* Argunmentos en las funciones
// function area(figura='cuadrado',base=0, altura=0){
//     switch(figura){
//         case 'cuadrado':
//             return base * base;
//         case 'rectangulo':
//             return base * altura;
//         case 'triangulo':
//             return (base * altura)/2;
//         default:
//             throw new Error('Figura no encontrada');
//     }
// }
// const res= area('rectangulo',10,4);
// console.log(res);

//!parametros rest
// function perimetro(...lados){
//     let suma= 0;
//     for(let i =0; i< lados.length; i++){
//         suma += lados[i];
//     }
//     return suma;
// }
// console.log(`El perimetro de la figura es : ${perimetro(10,2,3,4)}`);//*funcion ejecutada dentro de un cosole.log()
//! Mas de rest...
// const suma = function (...numeros){
//     let suma=0;
//     let contador=0;
//     while(contador < numeros.length){
//         suma += numeros[contador];
//         contador++;
//     }
//     return suma;
// }
// console.log(`la suma es ${suma(2,1,2,1,2)}`);

//*Funciones Anonimas y de flecha
//! Las funciones anonimas se auto ejecutan automaticamente;

//! Definicion
// (function () {

// });

//!Ejecucion
// (function () {

// })();

//!funciones de flecha
// function inicialUI(parametro1,parametro2){
//codigo
// }
// const inicialUI=(p1,p2)=>{
//codigo
// }
//! simplificacion de funcion de flecha
// const saludo = nombre => console.log(`hola ${nombre}`);
// saludo('carlos');
//! Mas de flecha
//todo no existe el contenido fuera de la funcion anonima
// (function(){
//     console.log('hola mundo!')
// })();
//! flecha anonima
//  ((nombre)=>{
//     console.log('nombre'+nombre);
// })();


//*GENERADORES video 25
//todo por conocer mas de generadores y sus aplicaciones


//* CLAUSURAS
//! Define el alcance de la clausura

// function generarUI() {
//     let panel = 'edicion';
//     function actualizarDatos() {
//         console.log(panel);
//     }
//     return actualizarDatos();
// }
// let res = generarUI();
// res();

//!funcion dentro de funcion()();
// function suma(n1){
//     return function(n2){
//         return n1+n2;
//     }
// }
//todo res ya tiene el valor de suma y se le asigna el segundo valor a res
// let resDos= suma(10);
// console.log(resDos(5));

//! Funciones dentro de funciones ( CLAUSULAS )
// let nombre = 'julio'; //? aqui no existe .this
// var nombre = 'julio'; //? aqui si existe .this
// const nombre = 'julio'; //? aqui si existe .this

// function uno() {
//     console.log('funcion 1')
//     let nombre = 'adolfo'
//     console.log(nombre);
//     function dos() { //* return
//         console.log('Funcion 2')
//         nombre='Lena'
//         console.log(nombre)
//         function tres(){ //* return
//             console.log('Funcion 3');
//             nombre='Maria';
//             console.log(nombre);
//         }
//         tres();
//     }
//     dos();
// }
// uno();

// const resultado01= uno();
// const resultado02= resultado01();
// const resultado03= resultado02();


//* =======> Arreglos
//?conjunto de espacio en memoria donde se almacena informacion
//!introduccion a arreglos y como acceder a ellos
// let arreglo = [4,1,8,10,0,9];
// console.log(arreglo[0]);
// arreglo[0]=10;
// console.log(arreglo[0]);
// console.log(arreglo.length);

//! Maneras de definir un arreglo
// let nombre = new Array(5);
// nombre[0]='juan';
// console.log(nombre[0])

// let calificaciones=[1,2,3,4,5];
// console.log(calificaciones);
// calificaciones[20]=10;
// console.log(calificaciones)

//! ====> for of
//todo for of para iterar en los elementos de un arreglo
// for (const calificacion of calificaciones) {
//     console.log('For Of: ',calificacion);
// }

















//*Diferencia entre arreglos y objetos
// const arreglo = [1, 2, 3, 4];

// const sumaNan = (num1='1',num2=10)=>{ //funcion con parametros
//     if(isNaN(num1) || num1!==Number){
//         throw new Error('No es un numero');
//     }
//     const respuesta= num1*num2;
//     console.log('la respuesta es: '+' '+respuesta);
// }


// function suma(...numeros){ //!recorrido desde varios parametros
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

// for (let i = 0; i < arreglo.length; i++) { //!seguimiento por indice
//     const element = arreglo[i];
//     console.log('el elemento es : '+element+ ' en la poscicion '+i)
// }
















//* ======= > METODOS PARA MANUPULAR ARREGLOS EN ECMASCRIPT6

//.push() //!inserta un nuevo elemento al final del mismo
//.pop() //!quita el ultimo elemento de la lista
//.unshift() //!agrega al inicio de un arreglo
//.shift() //!quita el primer elemento del arreglo

//.indexof() //!regresa la poscicion de la primera coincidencia con -1 no existe const busqueda=arreglo.indexOf(12)
//.join(" ") //!recibe parametro tipo caracter para unir y hacer cadena de texto const text=arreglo.join('+')
// .split("-") //!separa cada caracter por un "-"

// SORT
// FLAT
// FIND

//? EJEMPLOS CON LOS METODOS DE ARREGLOS ESC6
//todo ejemplo de indexOf
//?verifica si existe y en que indice existe
// let cordenadas=[1,2,3,4,3,2,1];
// const posicion=cordenadas.indexOf(3);
// console.log(posicion);
// if(posicion<0){
//     console.log('no se encontro el numero buscado');
// }else{
//     console.log(`el valor es ${posicion}`)
// }
//todo ejemplo de join
//?cambia un arreglo a string
// let bienvenida =['bienvenido','al','curso'];
// const texto = bienvenida.join("-");
// console.log(texto);
//todo ejemplo de split
//?cambia un string a arreglo
// let cuenta = '222-1111-3333';
// const arregloCuenta= cuenta.split("-");
// console.log(arregloCuenta);






//*=====================================================================>>>>>>>>> VAMOS EN EL VIDEO 32!  ARREGLOS AVANZADOS

//!flat regresa un arreglo dimensional

// const calificaiones =[[10,8],[7,5],[10,10]]
// const resultado = calificaciones.flat();
// console.log('flat resultado es:',resultado)

//?quita los nivels de anidacion
// const datos =[1,2,3,[[[[10,10]]]]]
// const resultado = datos.flat(3); 
// console.log('flat resultado es:',resultado)


//!sort
//?COMPARA EN CARACTERES ASCII LOS VALORES
// const arregloSort = arreglo.sort((a,b)=>{
//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// })
// console.log(arregloSort)
//?mas sencillo
// function compare(a,b){
//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// }
// function compareDos(a,b){
//     return a-b;
// }

//!forEach solo es recorrido de elementos para arreglos
//?Trabaja atravez de una funcion anonima o una funcion declarada
// const calificaciones = [1,2,3,4,5];
// const mensajes= ['hola','al','curso','de','js'];
// calificaciones.forEach(function(value,i){//?funcion tradicional
//     console.log(value,i);
// })

// calificaciones.forEach(valor=>{//?funcion de flecha
//     console.log(valor);
// })

// arreglo.forEach(element => {
//     console.log(element)
// const object = {a:1,b:2,c:3}; //?es un recorrido para objetos
// for (const property in object) {
//     console.log(`${property} : ${object[property]}`);
// }

//!map reresa un valor a un nuevo arreglo
//?Map regresa un arreglo respuesta
// const arreglo=[1,2,3];
// const respuestaMap = arreglo.map((valor,indice)=>{
//     return valor * 10;
// })
// console.log(respuestaMap);

//!reduce regresa un resultado unico
//?Agrega una operacion realizada a un acumular para retrornar  un resultado final
// const arreglo=[1,2,3,4,5];
// const sumaAcumulador = arreglo.reduce((acumulador, valor) => {
//     return acumulador += valor;
// },0);
// console.log(sumaAcumulador)



//!filter regresa un arreglo basadoo en una condicional
//? Filtra un arreglo basado en una condiconal y regresa todas las conicidencias
// const arreglo=[4,2,10,5];
// const arregloFilter = arreglo.filter((item)=>{
//     return item < 4;
// })
// console.log(arregloFilter)

//!find regresa la primera coincidencia
//?  Regresa la primer conincidencia
// const arreglo=[10,20,30];
// const arregloFind= arreglo.find((item)=>{ return item >0})
// console.log(arregloFind)

//!some regresa una respuesta booleana
//? Regresa un booleano si se cumple la condicion 
// const arreglo=[5,4,3];
// const resSome= arreglo.some(mensaje=>{
//     return mensaje === 1;
// })
// console.log(resSome)








//*--------------------------------------------------------------------------*/ cosas raras xD
//!MAPA
// let mapa = new Map();
// mapa.set("juan",10);
// const data =mapa.get("juan");  //10
// console.log(data)
// mapa.clear();//limpia
// mapa.delete("juan"); //borra
// mapa.has("juan"); //true

//!SET
// let calificaciones = new Set();
// calificaciones.add(10);
// calificaciones.add(8);
// calificaciones.add(5);
// calificaciones.add(10);//no lo agrega porque existe

// let elementos = calificaciones.entries();
// elementos.next().value;//retorna 7 si [7,8]
// elementos.next().value;//retorna 8 si [7,8]


//*--------------------------------------------------------------- */ 40 Strings
//*CADENAS DE TEXTO METODOS!
// const texto="hola"
// console.log(texto.length)//!da la longitudad inicia en 1
// console.log(texto[1])

// console.log(texto.indexOf("h"));//!retorna la primera conincidencia
// console.log(texto.lastIndexOf("a"));//!retorna la ultima coincidencia
// console.log(texto.slice(0,4));//!muestra solo dentro del rango de slice (indice, final)
// console.log(texto.substr(0,2));//!substrae una cadena de texto (indice, numero de caracteres totales)

// const nuevo = texto.replace("hola","amigos");//!remplaza un texto
// console.log(nuevo);

//console.log(texto.toUpperCase())//! transforma texto en mayusculas
// console.log(texto)
// console.log(texto.toLowerCase())//!transforma texto en minusculas

// let concatenado = nuevo.concat(' ',texto)
// console.log(concatenado)//!une dos textos

// let separado = " hola separado ";
// console.log(separado.trim())//!quita espacios vacios
// console.log(separado.split(' '))//! separa string donde indique ' ' y convierte en arreglo

// for (let i = 0; i < texto.length; i++) {//!hace recorrido por letra
//     const item = texto[i];
//     console.log(item)
// }
// const texto2=[1,2,3,4,5] //!para arreglos y puede guardar en nuevo array
// texto2.forEach(element => {
//     console.log(element)
// });

// console.log(typeof(texto))//typeof

// const valor= 12;
// let texto = `bienvenidos al curso con costo de ${valor==12?'cierto':'falso'}`
// console.log(texto)

//* -------------------------------------------------------- */Objetos
//!OBJETOS #43
// let isabell = new Object();
// isabell['altura']=150;
// isabell['color_pelo']="amarillo";
// isabell['velocidad']="lento";

// let objetoIsabell= {
//     altura:250,
//     color_pelo:"amarillo",
//     chaleco:{
//         color:"verde"
//     }
// }
// console.log(objetoIsabell.chaleco.color);
//! video 44
// let personajes=[
//     {
//         color:"azul",
//     },
//     {
//         altura:150,
//     },
//     {
//         animal:true
//     }
// ]
// console.log(personajes[0].color);

// const letras=['hola','cosa','fea','usuarios'];
// const otras='otras'
// console.log((letras.concat(otras)))


//! metodos en objetos

// let kk={
//     altura:150,
//     color_pelo:"blanco",
//     cantar: function(arg1,arg2){
//         return "guau";
//     }
// }
// console.log(kk.cantar())
//?FUNCIONES DENTRO DE OBJETOS
// const usuario={
//     id:5,
//     nomre:'sarah',
//     edad:38,
//     saludo: function(){
//         return 'hola bienvenido al curso'
//     }
// }
// console.log(usuario.saludo());

// const viaje={
//     tiempo:function(distancia,velocidad){
//         return distancia/velocidad;
//     }
// };console.log(viaje.tiempo(100,40));

// const viaje={
//     distancia:120,
//     velocidad:200,
//     tiempo:function(){//?no estan dentro del contexto de la funcion
//         return this.distancia/this.velocidad;
//     }
// };console.log(viaje.tiempo());


//* THIS EN JAVASCRIPT
//?HACE REFERENCIA AL OBJETO QUE LO CONTIENE PERO EL VALOR DEPENDE DE COMO SE USE
//! Como se usa this y sus aplicaciones

// let post={// todo  aqui this. hace referencia dentro del objeto
//     likes:50,
//     getLikes:function(){
//         return console.log(this.likes);
//     }
// }
// post.getLikes();

// this;// todo hace referencia al objeto global, no hace referencia a nada de nuestro codigo.
// function prueba(){
//     return this;
// }

// button.addEventListener('click', function(e){//todo aqui hace referencia al evento detonante "button"
//     console.log(this)
// });

//! no puede encontrar el objeto global y como no exite muestra undefined
//* this no puede acceder al obejto que lo contienen en funcion de flecha
//* como no existe de manera global muestra undefined porque sube al objeto global

// let tuit = {//todo en () => no existe la propiedad this
//     likes:10,
//     rt:20,
//     getlikes: function() {return console.log(this.likes);},
//     getRT: () => {return console.log(this.rt);}
// }
// tuit.getlikes();
// tuit.getRT();

//*=================================>DEMO DE THIS
// let nombre="carlos";
// let edad=20;
// console.log(nombre,edad);
// //todo THIS ES UN OBJETO GLOBAL AL CUAL SE LE PUEDE MANIPULAR COMO OBJETO
// this.nombre='jessica';
// this.edad=10;
// console.log(this.edad,this.nombre);
// console.log(this);
// console.log(window);

//todo en objetos this accede solo a lo que esta dentro del objeto
// this.nombre="esto es this global";
// const usuario={
//     id:'5',
//     nombre:'sarah',
//     edad:35,
//     saludo: function() {
//         return `hola, ${this.nombre}` //todo sin el this marca error porque no puede acceder
//     },
//     getNombre: ()=>{ //!funcion de flecha
//         return this.nombre; //todo el return this significa que el retorno es anivel objeto
//     }
// }
// console.log(usuario.saludo());
// console.log(usuario.getNombre());


//! call apply &  bind
//todo permite unir objetos a this
// const user={
//     name:'Marcos'
// };
// const business={
//     name:'Headbook'
// };

// function showInfo(likes,friends) {
//     return `${this.name} tiene ${likes} likes y ${friends} amigos`
// }

// console.log(showInfo.call(business,4,2));
// console.log(showInfo.apply(user,[4,2]));

// const newFuntion = showInfo.bind(user);
// console.log(newFuntion(10,15));

//* DESESTRUCTURACION DE OBJETOS
//todo sirve para no crear otas variables 

// let kk = {
//     altura: 150,
//     color_pelo: "blanco"
// };
// let altura = kk.altura;
// let color_pelo = kk.color_pelo;

//? Quiero que me desestrucutres estas variables de KK;
// let{altura,color_pelo}= kk;//!DESESTRUCTURACION

// let personajes = [//!como accedes a uno solo de los 3 desestructurando?
//     {
//         altura:10,
//         color_pelo:"blanco"
//     },
//     {
//         altura:100,
//         color_pelo:"negro"
//     },
//     {
//         altura:1,
//         color_pelo:"gris"
//     }
// ]
// let [,,dos]= personajes;
// console.log(dos);

// let[isa,nook,kk]=personajes;
// console.log('isa : ',isa);
// console.log('nook : ',nook);
// console.log('kk : ',kk);

//todo EEJEMPLOS DE DESESTRUCTURACION DE OBJETOS

// const usuario = {
//     id:10,
//     nombre:'nombreUsuario',
//     edad:20,
//     habilidades:[
//         {id:0,nombreHabilidad:'programacion'},
//         {id:1,nombreHabilidad:'hablar'},
//     ]
// }
// const {id,nombre,habilidades}=usuario;
// console.log(id,nombre,habilidades);

// const [habilidad01,habilidad02]= habilidades;
// console.log(habilidad01,habilidad02);

// const elementos=[
//     {id:0,nombre:'kk'},
//     {id:1,nombre:'canelita'},
//     {id:2,nombre:'nook'},
// ];
// const [kk,canelita,nook]= elementos;
// console.log(canelita,kk,nook);


//*==================================================================================================> DOM
//! MANERAS DE OBTENER ELEMENTOS Y NODOS

// const logov2 = document.querySelector('#id');
// const logov4 = document.querySelectorAll('.clase');
// const logo = document.getElementById('id');
// const logov3 = document.getElementsByClassName('clase');
// const logov5 = document.getElementsByTagName('etiqueta');

// const item = document.getElementsByClassName('item');
// const itemv2 = document.querySelectorAll('.item');
// console.log(Array.isArray(item),Array.isArray(itemv2));
// console.log(Reflect.has(item,'forEach'),Reflect.has(itemv2,'forEach'));
// console.log(Reflect.has(item,Symbol.iterator),Reflect.has(itemv2,Symbol.iterator));


//! OBTENER HIJOS DEL HTML====================================== IMPORTANTE EN JAVASCRIPT
//? NAVEGACION POR EL DOM VIDEO 54
//* moverse en el DOM =============================IMPORTANTE EN JAVASCRIPT
//todo PADRES , HIJOS Y HERMANOS EN JAVASCRIPT

// const header = document.querySelector('header');
// const hijosHeader = header.children;//*devuelve los hijos sin importar los asltos de linea
// console.log(hijosHeader);
// const hijosHeaderv2 = header.hasChildNodes;//* devuelve los elementos con saltos de linea
// console.log(hijosHeaderv2)


// console.log('padre', logo.parentElement, logo.parentNode);//*parentnode igual
// console.log('hermanos',logo.parentElement.children, logo.nextElementSibling);//*siblin trae solo lo que pide

//!PROPIEDADES DEL DOM
//? LAS PROPS SON LAS PROPIEDADES DE HTML
//TODO ES PARA ASIGNAR  PROPIEDADES A LOS ELEMENTOS HTML STRING Y NUMEROS 

//*asignar atributo
// imagen.setAttribure('width',"200px");
// imagen.width="200";
// //*obtener atributo
// imagen.width;//*numero
// imagen.getAttribute("height");//*string

// const boton = document.querySelector("#boton");//*acceder a un elemento por id

// imagen.textContent = "texto cambiado"; //* asigna texto nuevo
// imagen.textContent;//*JAVASCRIPT REGRESA EL VALOR DEL CONTENIDO

// const foto = document.querySelector('#foto');
// //?         tipo numero |  tipo string
// console.log(foto.width,foto.getAttribute('width'));
// console.table([
//     {
//         prop: foto.width,
//         tipo:typeof foto.width
//     },
//     {
//         prop: foto.getAttribute('width'),
//         tipo: typeof foto.getAttribute('width')
//     }
// ]);
// foto.width = 800;//* Numero
// foto.setAttribute('width','100%');//* String

// const boton = document.querySelector('#boton');
// console.log(boton.textContent);
// boton.textContent="hola";//*asigna elemento
// boton.setAttribute('class','boton-principal');//*asigna propiedad en string

//! MODIFICAR ESTILOS EN JAVASCRIPT =================================================================>>>> AQUI VAMOS!
//TODO MODIIFCAR ESTILOS CSS CON JAVASCRIPT
// boton.style.backgroundColor="blue";
// boton.style.backgroundImage = "url(image.jpg)"
//<div id="capa" class="container bg-red fs-14"></div>//conjunto de clases
// capa.classList.remove("otro-estilo");//añado o elimino clases
// capa.classList.replace("otro-estilo","estilo-nuevo");//cambia estilos
// capa.classList.toggle("panel");//valida si el estilo existe en la capa, si no existe lo agrega y si existe lo quita
// capa.classList.contains("otro-existe");//si existe regresa TRUE

//!ESTILOS EN LINEA
// const boton = document.querySelector('#boton');
// boton.style.backgroundColor='blue';
// boton.style.color='#fff';
// boton.style.paddingLeft='50px';
// boton.style.background = 'linear-gradient(270deg, rgba()...)'

//!ESTILOS CON CLASES
// const boton02 = document.querySelector('#boton02');
// boton02.classList.add('boton');
// boton02.classList.add('botonClaseDos');
// boton02.classList.remove('boton');
// boton02.classList.toggle('boton-estilos03');
// console.log(boton02.classList.contains('boton'));
// console.log(boton02.classList);



//AQUI VOY
//! CREAR Y ELIMINAR ELEMENTOS HTML
const elemento = document.createElement("section"); //*se crea un elemento section
elemento.setAttribute('id', "nuevoElemento");//*se agrega atributo id y su nombre
const main = document.querySelector("main");//*se seleccionar el lugar main

main.appendChild(elemento);//*se agrega a main el elemento creado al final TEXTO Y HTML
main.prependChild(elemento);//*se agrega a main el elemento creado al final TEXTO Y HTML

main.append(elemento);//*final de la lista HTML SIN SER TEXTO
main.prepend(elemento);//*inicio de la lista HTML SIN SER TEXTO


const boton = document.querySelector('#boton');//* se selecciona el boton
boton.append('click aqui')//* Al boton se le agrega el texto

const texto = document.createTextNode('click aqui'); //*se crea un nodo con el texto
const boton = document.querySelector('#boton');//*selecciona el id
//!orden mas estructurado
boton.appendChild(texto);//*referencia de variable de texto

createTextNode('texto a crear');//*Elemento texto
createElement('tipo de elemento a crear');//*Elemento contenedor
elemento.appendChild() || elemento.prependChild();

clase.remove()//*Elimina todos los hijos hasta el padre
clase.removeChild(clase.childNodes[0])//* cantidad de hijos a eliminar










//!FETCH & ASYNCH AWAIT
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res)=> res.json())
//     .then((data) => {
//         return console.log(data)
//     })
//     .catch( error =>{ console.log(error)})


//     const obtenerData = async()=>{
//         try{
//             const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
//             const data = await res.json();
//             console.log(data.results)
//           const nombres =  data.results.map((poke) => console.log(poke.name));
//         }catch(e){
//             console.log(e);
//         }
//     }
//!MAP



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


//*===============================================(FOR)
//! For y ForEach iguales no guardan 
//? forEach() FUNCIONA PARA ARREGLOS
//! map() guarda en nuevo array
//! Forin itera sobre todo
//! Forof solo sobre lo primero sin adicionales y en arreglos















//*=========================================>FORMULARIO JS

// let respuestas = {
//     nombre: '',
//     lenguajes: [],
//     nivel: '',
//     pais: ''
// };

//!SE ITERA POR CADA VALOR DESPUES DEL CLICK
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


//!se agrega el valor de input en respuestas.nombre
// const inputNombre = document.querySelector('#nombre');
// inputNombre.addEventListener('input', e => {
//     respuestas.nombre = inputNombre.value;
// })

//!se recorre el arreglo de input y se ve cual esta activo
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


//*CLAUSURA
// const suma = (n1) => {
//     return sumados = (n2) => {
//         return n1 + n2;
//     }
// }
// let res = suma(10);
// console.log(res(5))

//*this & scope
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

//let [isabel, nook, kk] = personajes;
// console.log(isabel.altura, nook.altura, kk.altura);








//*PROGRAMACION ORIENTADA A OBJETOS POO
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


//*ECMS6 y su poo
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



//!primero se hacia asi con funciones 
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

//!Simula una clase pero es objeto
//  const alumno3= {
//      matricula:'A03',
//      nombre:'adolfo3',
//      edad:27,
//      saludar: function () {
//          return `hola 3!!! mi nombre es ${this.nombre}  y tengo ${this.edad} y mi id es ${this.matricula}`
//      }
//  }
//  console.log(alumno3.saludar());














//!Objetos globales
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













//!Pasar por valor y referencia
// let edades= [28,30 , 32];
// let edades2 = edades;
// edades.push(34);

// console.log(edades)

// let numeros=[1,2,3,4];
// let numeros2=[...numeros];//opcion 1 <==
// let numeros3 = Array.from(numeros);//opcion 2 <===
// console.log(numeros)
// console.log(numeros2)
// console.log(numeros3)

// let objeto1={}
// let objeto2 = {...objeto1}
// let objeto3= Object.assign({},objeto1)


//!Valor nulo cero o undefined==============================================================================

// non = tiene contenido;
// 0 = valor es 0 
// null = no hay nada dentro
// undefined= no existe;

//operador coalescente nulo
//expresion ?? expresionn

// const valorNulo = null;
// const textoVacio = "";
// const numero =42;

// const valA= valorNulo ?? "default para A";
// const valB= textoVacio ?? "default para B";
// const valC= numero ?? 0;

//!ENCADENAMIENTO OPCIONAL 
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


//! OPERADOR COALESCENTE NULO - 111
// class Post {
//     #texto;
//     constructor(texto) {
//         this.#texto=texto;
//     }
//     get texto(){
//         return this.#texto;
//     }
//     getJSON(){
//         if(this.#texto=== undefined){
//             return null;
//         }else{
//             return {texto: this.#texto} ;
//         }
//     }
// }

// const post = new Post('adolfo');
// const json = post.getJSON();
// if(json === null){
//     console.log('el objeto esta vacio');
// }else{
//     console.log(json);
// }
// console.log(post.getJSON()??'el objeto esta vacio');

// const mensaje=undefined;
// const numero= undefined;
// const edades=undefined;
// console.log(mensaje ?? 'nada');
// console.log(numero ?? 'sin numero');
// console.log(edades ?? 'no valor nunm')


//!ENCADENAMIENTO OPCIONAL 
// class Reaction {
//     #likes;
//     constructor() {
//         this.#likes = 0;
//     }
//     newLike() {
//         this.#likes++;
//         return this.#likes;
//     }
//     get likes() {
//         return this.#likes;
//     }
// }
// class Post {
//     #texto;
//     #reaction;
//     constructor(texto) {
//         this.#texto = texto;
//         if (this.#texto) this.#reaction = new Reaction();
//     }
//     get text() {
//         return this.#texto;
//     }
//     getJSON() {
//         if (this.#texto === undefined) {
//             return null;
//         } else {
//             return { texto: this.#texto };
//         }
//     }
//     get reaction() {
//         return this.#reaction;
//     }
// }

// const post = new Post('HOLA MUNDO');
// post.reaction.newLike();
// if(post && post.reaction){
//     console.log(post.reaction.newLike());
// }else{
//     console.log('no existe la reaccion');
//}
// console.log(post?.reaction?.newLike() ?? 'NO EXISTE LA REACCION');
// const alumno = {
//     nombre: 'juan',
//     domicilio: {
//         calle: 'colon',
//         numero: 45,
//         cp: 3000,
//         referencias: [
//             {
//                 id: 0,
//                 nombre: 'cibeles'
//             },
//             {
//                 id: 1,
//                 nombre: 'nueva italia'
//             }
//         ]
//     },
//     calificaciones: {
//         primerperiodo:{
//             calificacion:5
//         }
//     }
// };
// console.log(alumno.calificaciones?.primerperiodo?.calificacion);



//*HERENCIA
// class Persona {
//     id;
//     nombre;
//     ead;
//     constructor(id,nombre,edad) {
//         this.id=id;
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     presentarse(){
//         return `${this.id}: ${this.nombre} tiene ${this.edad} años`;
//     }
// }
// class Alumno extends Persona{
//     calificaciones;
//     constructor(id,nombre,edad,calificaciones) {
//         super(id,nombre,edad);
//         this.calificaciones=calificaciones;
//     }
//     mostrarCalificaciones(){
//         return this.calificaciones.join(',');
//     }
// }
// class Profesor extends Persona {
//     sueldo;
//     constructor(id,nombre,edad,sueldo) {
//         super(id,nombre,edad);
//         this.sueldo=sueldo;
//     }
//     obtenerSueldo(){
//         return `${this.sueldo}`
//     }
// }

// const alumno = new Alumno('a01','adolfo',27,[1,2,3,4,5]);
// const profesor = new Profesor('b01','cosa',28,1000);
// console.log(alumno.presentarse());
// console.log(alumno.mostrarCalificaciones());
// console.log(profesor.presentarse());
// console.log(profesor.obtenerSueldo());



//*PROTOTYPE
// function Alumno(id,nombre) {
//     this.id = id;
//     this.nombre= nombre;
//     this.saludar=function () {
//         console.log(`${this.id}: ${this.nombre}`);
//     }
// }

// const alumno = new Alumno('A01','Marcos');
// alumno.saludar();
// Alumno.prototype.calificaciones=[9,9,9,9,9,99];
// Alumno.prototype.mostrarCalificaciones=function(){
//     console.log(this.calificaciones.join(','));
// }
// alumno.mostrarCalificaciones();


//*ASINCRONISMO
// setInterval(()=>{
//     document.querySelector('#resultado').textContent = new Date();
// },1000);


// const saludo = 'hola';
// const nuevo = [];
// const otro = [];
// for (const key in saludo) {
//     if (saludo[key] == 'a' || saludo[key] == 'e' || saludo[key] == 'i' || saludo[key] == 'o' || saludo[key] == 'u') {
//         nuevo.push(saludo[key])
//     }
// }

// for (const key in nuevo) {
//     if (nuevo[key] == 'a') {
//         otro.push(nuevo[key])
//     }
//     if (nuevo[key] == 'e') {
//         otro.push(nuevo[key])
//     }
//     if (nuevo[key] == 'i') {
//         otro.push(nuevo[key])
//     }
//     if (nuevo[key] == 'o') {
//         otro.push(nuevo[key])
//     }
//     if (nuevo[key] == 'u') {
//         otro.push(nuevo[key])
//     }
// }
// console.log(nuevo)
// console.log(otro)















//* PETICIONES HTTP
// class Http{
//     async get (url){
//         try{
//             const res = await fetch(url);
//             return res;
//         }catch{
//             return null;
//         }
//     }
// }

// const http = new Http();
// (async ()=>{

//     const res= await http.get('http://localhost:3000')

//     if(res===null){
//         console.log('el objeto esta vacio')
//     }else{
//         const data = await res.json();
//         console.log(data);
//     }
// })();

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
