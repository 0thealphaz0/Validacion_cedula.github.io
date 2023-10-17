//var micedula = "402-1355932-7";
//var cedulaNoValida = "00116454282";

//alert ("Cedula " + cedulaValida + ": " + valida_cedula(cedulaValida));
//alert ("Cedula " + cedulaValida + ": " + valida_cedula(cedulaNoValida));

/* Validación de número de cédula dominicana
 * con longitud de 11 caracteres numéricos o 13 caracteres incluyendo los dos guiones de presentación
 * ejemplo sin guiones 00116454281, ejemplo con guiones 001-1645428-1
 * el retorno es 1 para el caso de cédula válida y 0 para la no válida
 */

function valida_cedula() {

  var micedula = document.getElementById("ICedula").value;
  var c = micedula.replace(/-/g, "");
  var cedula = c.substr(0, c.length - 1);
  var verificador = c.substr(c.length - 1, 1);
  var suma = 0;
  var cedulaValida = 0;
  var mensaje , mensje1;

  if (c.length < 11) {
    mensaje = "La cédula no es valida."
    document.getElementById("no_valido").innerHTML = mensaje;
    return false;
    
  }
  for (i = 0; i < cedula.length; i++) {
    mod = "";
    if (i % 2 == 0) {
      mod = 1;
    } else {
      mod = 2;
    }
    res = cedula.substr(i, 1) * mod;
    if (res > 9) {
      res = res.toString();
      uno = res.substr(0, 1);
      dos = res.substr(1, 1);
      res = eval(uno) + eval(dos);
    }
    suma += eval(res);
  }
  el_numero = (10 - (suma % 10)) % 10;
  if (el_numero == verificador && cedula.substr(0, 3) != "000") {
    cedulaValida = 1;
    mensaje = "La cédula es valida.";
    mensaje1 = " ";
    document.getElementById("valido").innerHTML = mensaje;
    document.getElementById("no_valido").innerHTML = mensaje1;
  
  } else {
    cedulaValida = 0;
    mensaje = "La cédula no es valida.";
    mensaje1 = " ";
    document.getElementById("no_valido").innerHTML = mensaje;
    document.getElementById("valido").innerHTML = mensaje1;
  }
  return cedulaValida;
}
