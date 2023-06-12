document.addEventListener("DOMContentLoaded",function(){
    var peso=document.getElementById('peso');
    var dolar=document.getElementById('dolar');
    var tasa=document.getElementById("tasa");
    var tcDP
    tasa.addEventListener("input",function(){
        tcDP=tasa.value
        peso.value=""
        dolar.value=""
    })
peso.addEventListener("input",function(){
    var pesos=parseFloat(peso.value);
    if(!isNaN(pesos)){
        var dolares =pesos/tcDP;
        dolar.value=dolares.toFixed(2);
    } else{
        dolar.value="";
    }
})
dolar.addEventListener("input",function(){
    var dolares=parseFloat(dolar.value);
    if(!isNaN(dolares)){
        var pesos =dolares*tcDP;
        peso.value=pesos.toFixed(2);
    } else{
        peso.value="";
    }
})
var boton=document.getElementById('limpiar')
boton.addEventListener("click",function(){
    peso.value=""
    dolar.value=""
    tasa.value=""
})
})

