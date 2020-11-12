/*MUESTRA MENSAJES EMERGENTES a los usuarios el método alert ("") */

//alert("Hola desde JavaScript.")

/*MENSAJES PARA DESARROLLADORES  hacer debug y ver el coódigo*/

//console.log("Este es un mensaje que se muestra en la consola del navegador")

/*AFECTA DIRECTAMENTE EL DOCUMENTO HTML*/
//document.write('Hola a todos desde el DOM')

/*PERMITE MOSTRAR Y RECOLECTAR INFORMACION del usuario */
 //prompt("Ingresa tu edad")

/*palabras reservadas y FUNCIONES
let edad= 25
var age=25
function sumarDiezaEdad(){
    let edad = 25
    console.log('Esta es age->', age)
}sumarDiezaEdad()*/

/* innerHTML me permite MODIFICAR todo lo que hay en una etiqueta*/
//EJEMPLO1
/*function cambiarMensaje(){
    document.getElementById("mensaje").innerHTML="Este div se cambio oh siii"
}*/

//EJEMPLO2
/*function cambiarMensaje(){
    let mensaje=prompt("Escribe tu mensaje")
    document.getElementById("mensaje2").innerHTML = mensaje
}*/
//EJEMPLO3 parámetros Se vuelve dinámica la función
/*function cambiarMensaje(idDiv){
    let mensaje=prompt("Escribe tu mensaje")
    document.getElementById(idDiv).innerHTML = mensaje
}*/
   /* function sumarNumeros(){
        let num1= parseInt(prompt("Ingresa el primer numero"))
        let num2= parseInt(prompt("Ingresa el segundo numero"))
        let suma= num1 + num2
        alert("la suma de los números es "+ suma)
        sumarNumeros()
    }*/
function printNum(numero){
   // document.getElementById('data').value = numero
   printDatos(numero)
}
function printOper(operador){
   // document.getElementById('data').value = operador
   printDatos(` ${operador} `)
}
function printDatos(dato){
    let valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value+ " " + dato;
    valorInput.value = `${valorInput.value}${dato}`
}
function limpiar(){
   document.getElementById("data").value=''
}

function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    
    /*if(arreglo[1]== "+"){
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById('data').value = suma  
    }else  if(arreglo[1]=="-"){
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById('data').value = resta
    }else  if(arreglo[1]=="*"){
        let multiplicacion = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById('data').value = multiplicacion
    } else{
        let division = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById('data').value = division 
    }*/

    switch (arreglo[1]){
        case'+':
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById('data').value = suma
            break;
        case '-':
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById('data').value = resta
            break; 
        case '*':
            let multiplicacion = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById('data').value = multiplicacion
            break; 
        case '/':
            let division = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById('data').value = division
            break;
    }

/*function mostrardia(){
    let valorInput=document.getElementById('data').value
    let arreglo= valorInput.split("")

    switch(arreglo[1]){
        case 'lunes':
            alert.log("lunes")
            let lunes = parseInt(arregl[0]) + parseInt(arreglo[2])
            document.getElementById("data").value = lunes
            break;
    }
*/
}

}