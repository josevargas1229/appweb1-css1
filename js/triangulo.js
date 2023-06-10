var l1 = 0,
  l2 = 0,
  l3 = 0,
  area = 0,
  perimetro = 0,
  tipo,
  sperimetro = 0,
  cantidad = 0,
  control = 0;

function captura1() {
  l1 = document.getElementById("l1").value;
  l1 = Number.parseInt(l1);
  if (isNaN(l1)) l1 = 0;
  if (control != 0 || cantidad != 0) {
    eliminarTodo();
    control = 0;
  }
}
function captura2() {
  l2 = document.getElementById("l2").value;
  l2 = Number.parseInt(l2);
  if (isNaN(l2)) l2 = 0;
  if (control != 0 || cantidad != 0) {
    eliminarTodo();
    control = 0;
  }
}
function captura3() {
  l3 = document.getElementById("l3").value;
  l3 = Number.parseInt(l3);
  if (isNaN(l3)) l3 = 0;
  if (control != 0 || cantidad != 0) {
    eliminarTodo();
    control = 0;
  }
}
function peri() {
  if (posible()) {
    perimetro = l1 + l2 + l3;
    if (control != 0) {
      var h2 = document.createElement("h2");
      var content = document.createTextNode("El perimetro es: " + perimetro);
      h2.appendChild(content);
      document.getElementById("resultados").appendChild(h2);
      cantidad++;
    } else control++;
  } else {
    var contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "<h2>El triángulo no es posible</h2>";
  }
}
function ar() {
  if (posible()) {
    if (control == 0) peri();
    sperimetro = perimetro;
    console.log(sperimetro);
    sperimetro = sperimetro / 2;
    console.log(sperimetro);
    area = Math.sqrt(
      sperimetro * (sperimetro - l1) * (sperimetro - l2) * (sperimetro - l3)
    );
    var h2 = document.createElement("h2");
    var content = document.createTextNode("El área es: " + area);
    h2.appendChild(content);
    document.getElementById("resultados").appendChild(h2);
    cantidad++;
  } else {
    var contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "<h2>El triángulo no es posible</h2>";
  }
}
function tip() {
  if (posible()) {
    var h2 = document.createElement("h2");
    var content;
    cantidad++;
    if (l1 == l2 && l1 == l3) {
      content = document.createTextNode("El triángulo es equilátero");
    } else {
      if (l1 != l2 && l1 != l3 && l2 != l3)
        content = document.createTextNode("El triángulo es escaleno");
      else content = document.createTextNode("El triángulo es isósceles");
    }
    h2.appendChild(content);
    document.getElementById("resultados").appendChild(h2);
  } else {
    var contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "<h2>El triángulo no es posible</h2>";
  }
}

function eliminarTodo() {
  var contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";
}
function eliminar() {
  var contenedor = document.getElementById("resultados");
  var elementos = contenedor.getElementsByTagName("h2");
  var ultimo = elementos[elementos.length - 1];
  contenedor.removeChild(ultimo);
  cantidad--;
  if (cantidad < 0) cantidad = 0;
}

function posible() {
  var mayor = 0;
  var m1 = 0;
  var m2 = 0;
  if (l1 > mayor) {
    mayor = l1;
    m1 = l2;
    m2 = l3;
  }
  if (l2 > mayor) {
    mayor = l2;
    m1 = l1;
    m2 = l3;
  }
  if (l3 > mayor) {
    mayor = l3;
    m1 = l1;
    m2 = l2;
  }
  var sm = m1 + m2;
  if (sm > mayor) {
    return true;
  }
}
