//variables con js var, let, const var nombre nombre=39 nombre="luis"
var v1 = 0,
  v2 = 0,
  res,
  resul,
  texto,
  cantidad = 0;
  

function captura1() {
  v1 = document.getElementById("v1").value;
  v1 = Number.parseInt(v1);
  if (isNaN(v1)) v1 = 0;
}
function captura2() {
  v2 = document.getElementById("v2").value;
  v2 = Number.parseInt(v2);
  if (isNaN(v2)) v2 = 0;
  resul = document.getElementById("resultado");
}
function sum() {
  res = v1 + v2;
  if (cantidad == 0) {
    texto = "El resultado de la suma es: " + res;
    resul.textContent = texto;
    cantidad++;
  } else {
    var h2 = document.createElement("h2");
    var content = document.createTextNode("El resultado de la suma es: " + res);
    h2.appendChild(content);
    document.getElementById("resultados").appendChild(h2);
    cantidad++;
  }
}
function resta() {
  res = v1 - v2;
  if (cantidad == 0) {
    texto = "El resultado de la resta es: " + res;
    resul.textContent = texto;
    cantidad++;
  } else {
    var h2 = document.createElement("h2");
    var content = document.createTextNode(
      "El resultado de la resta es: " + res
    );
    h2.appendChild(content);
    document.getElementById("resultados").appendChild(h2);
    cantidad++;
  }
}
function multiplicacion() {
  res = v1 * v2;
  if (cantidad == 0) {
    texto = "El resultado de la multiplicación es: " + res;
    resul.textContent = texto;
    cantidad++;
  } else {
    var h2 = document.createElement("h2");
    var content = document.createTextNode(
      "El resultado de la multiplicación es: " + res
    );
    h2.appendChild(content);
    document.getElementById("resultados").appendChild(h2);
    cantidad++;
  }
}
function division() {
  if (v2 != 0) {
    res = v1 / v2;
    if (cantidad == 0) {
      texto = "El resultado de la división es: " + res;
      resul.textContent = texto;
      cantidad++;
    } else {
      var h2 = document.createElement("h2");
      var content = document.createTextNode(
        "El resultado de la división es: " + res
      );
      h2.appendChild(content);
      document.getElementById("resultados").appendChild(h2);
      cantidad++;
    }
  } else texto = "No se puede dividir entre 0";
  resul.textContent = texto;
}
function eliminarTodo() {
  var contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";
  const label = document.createElement("h2");
  label.id = "resultado";
  label.textContent = "El resultado de la... es:...";
  contenedor.appendChild(label);
  cantidad=0
  resul = document.getElementById("resultado");
}
function eliminar() {
  var contenedor = document.getElementById("resultados");
  var elementos = contenedor.getElementsByTagName("h2");
  var ultimo = elementos[elementos.length - 1];
  contenedor.removeChild(ultimo);
  cantidad--;
  if (cantidad <= 0) {
    const label = document.createElement("h2");
    label.id = "resultado";
    label.textContent = "El resultado de la... es:...";
    contenedor.appendChild(label);
    cantidad=0;
    resul=document.getElementById("resultado")
  }
}
