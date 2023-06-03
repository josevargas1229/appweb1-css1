function adivinar(){
    const numero=Math.floor(Math.random()*100);
    var intento=1;
    var ingresado=parseInt(prompt('Adivine el número que estoy pensando (0 al 100)'));
    do{
        if (ingresado<numero)
            ingresado=parseInt(prompt('Es más, inténtelo nuevamente'));
        if (ingresado>numero)
            ingresado=parseInt(prompt ('Es menos, inténtelo nuevamente'));
        intento++;
    }
    while (numero!=ingresado)
    alert("Felicidades, usted ha adivinado el número correctamente en "+(intento+1) + " intento(s)");
}