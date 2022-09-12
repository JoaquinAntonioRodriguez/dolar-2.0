
function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100 )
    
}
function dolarOficial(precio) {
    return precio * 139
}
function dolarBlue(precio) {
    return precio * 280
}
for (let index = 0; index < 5 ; index++) {
    let resultado = impuesto(parseFloat(prompt("Ingresar precio "))
  ,parseFloat(prompt("Ingresar %")));
  alert(resultado);
  let dolarO= dolarOficial(parseFloat(prompt("Ingresar total para dolar Oficial")))
  alert (dolarO)
  let dolarB =  dolarBlue (parseFloat(prompt("Ingresar total para dolar Blue")))
  alert (dolarB)
}


