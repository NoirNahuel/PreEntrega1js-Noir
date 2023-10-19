
let respuesta = "si"

function bonusdesc(dest, pjs){
    let precio;
    switch (dest){
        case "1": 
        precio = pjs * 20000
        break
        case "2": 
        precio = pjs * 20000
        break
        case "3": 
        precio = pjs * 20000
        break
    }
    if(pjs>5){
        precio = precio - (precio * 0.30)
        alert("Tiene descuento del 30%")
    }
    return precio
}

alert("Bienvenido a Aerolíneas Noir")

alert("Aqui podra calcular su costo de vuelo")

alert("Oferta por tiempo limitado, ¡descuento del 30% comprando mas de 5 pasajes!")

do{
    let destino = prompt("Ingrese el destino: 1- Brasil. 2- Uruguay. 3- Chile.")

    let pasajeros = prompt("Ingrese cantidad de pasajeros:")

    alert("el costo es de $" + bonusdesc(destino, pasajeros))

    respuesta = prompt("¿Desea conocer otro presupuesto? (si - no)")

} while (respuesta == "si") 

alert("Gracias por usar Aerolíneas Noir")