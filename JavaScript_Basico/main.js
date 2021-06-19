'use strict'

console.log('calculadora')
var lista = document.getElementById('lista')

var numero = 1

var personas = [
    { nombre: 'Julio Tejeira', edad: 22},
    { nombre: 'Papucho', edad: 2}
]

personas.map(function(persona){
    console.log(persona.nombre +' '+persona.edad)
})

for(let persona in personas){
    console.log(personas[persona].nombre +' '+personas[persona].edad)
    let li = document.createElement('li')
    let liText = document.createTextNode(personas[persona].nombre)
    li.appendChild(liText)
    lista.appendChild(li)
        
}

function operaciones(){
    let resp = document.getElementById('resultado')
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let operacion = document.getElementById('operaciones')
    let selected = operacion.options[operacion.selectedIndex].text
    let resultado = 0
    let proceso = ""


    if(num1 == '' || num1 == null || num2 == '' || num2 == null){
        alert('Los números son requeridos.')
        return
    }

    num1 = parseInt(document.getElementById('num1').value) 
    num2 = parseInt(document.getElementById('num2').value)

    switch(operacion.value){
        case '+':
            resultado = num1 + num2
            proceso = `${num1} + ${num2} = ${resultado}`
            break
 
        case '-':
            resultado = num1 - num2
            proceso = `${num1} - ${num2} = ${resultado}`
            break

        case '*':
            resultado = num1 * num2
            proceso = `${num1} * ${num2} = ${resultado}`
            break

        case '/':
            if(num2 !=0){
                resultado = num1 / num2
                proceso = `${num1} / ${num2} = ${resultado}`
            }else{
                alert('No puede dividir un número entre cero')
                return
            }
            break
    }

    resp.innerHTML = resultado
    let li = document.createElement('li')
    let liText = document.createTextNode(`operacion: ${selected},  resultado: ${proceso}`)
    li.appendChild(liText)
    lista.appendChild(li)

}

//tipos de datos 

//number

var numero = 10

//string

var cadena = "hola mundo"

//boolean

var verdadero = true
var falso = false

var numero = 12
const numero1 = 20

if(numero > 9){
    let numero = 20
    const numero1 = 30

    console.log(numero)
    console.log(numero1)
}

console.log(numero)
console.log(numero1)



function mientras(){
    let num = 0
    while(num < 10){
        console.log(`El número: ${num} es menor a 10`)
        num++
    }

}
mientras()