let nombre
let tipoPresupuesto
let aumentoSegunMes
let mesEstudio
let edad
let valorEstudioActual = 0

pedirNombre();

do {
  tipoPresupuesto = pedirTipoPresupuesto()
  switch (tipoPresupuesto) {
    case 1:
      valorEstudioActual = 1200
      console.log("Valor actual del estudio seleccionado: $ " + valorEstudioActual)
      break;
    case 2:
      valorEstudioActual = 2500
      console.log("Valor actual del estudio seleccionado: $ " + valorEstudioActual)
      break;
    case 3:
      valorEstudioActual = 1700
      console.log("Valor actual del estudio seleccionado: $ " + valorEstudioActual)
      break;
    case 4:
      valorEstudioActual = 900
      console.log("Valor actual del estudio seleccionado: $ " + valorEstudioActual)
      break;
    default:
      console.log("Por favor ingrese un valor correcto")
  }
}while (tipoPresupuesto < 1 || tipoPresupuesto > 4)

pedirMesEstudio()

//funciones

function pedirNombre() {
  do {
    nombre = prompt("Ingrese su nombre").toUpperCase()
  } while (nombre === "")
  console.log("BIENVENIDO/a " + nombre)
}

function pedirTipoPresupuesto() {
  return parseInt(prompt("Ingrese el numero que corresponde al tipo de estudio a presupuestar \n1. ELECTROENCEFALOGRAMA \n2. POLISOMNOGRAFIA \n3. ELECTROMIOGRAMA \n4. CONSULTA "))
}

function pedirMesEstudio() {
    do {
      mesEstudio = parseInt(prompt("Ingresá el numero que corresponde al mes en que realizara el estudio \n1. NOVIEMBRE \n2. DICIEMBRE \n3. ENERO"))
      switch (mesEstudio){
        case 1:
        mensajeFinal(valorEstudioActual*1.12)
        break;
        case 2:
        mensajeFinal(valorEstudioActual*1.15)
        break;
        case 3:
        mensajeFinal(valorEstudioActual*1.18)
        break;
        default:
        console.log("Ingrese un valor valido")
        break;
     }
   } while (mesEstudio < 1 || mesEstudio > 3)
}

function mensajeFinal(valorFinal) {
  console.log("En el mes seleccionado el estudio tendra un valor de : $ " + valorFinal.toFixed(2) + "\nDebido a la inflacion")
}
