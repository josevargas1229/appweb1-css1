var uss="admin", pss="00000000",contador=0
//declarando el formulario para poder invocar su evento submit
var form=document.getElementById('frmlogin');

form.addEventListener("submit",function(evento){
    var usuario=document.getElementById('user').value
    var password=document.getElementById('pass').value
    var boton=document.getElementById('boton')
    var url="../respuesta.html"
    var parametros="?usuario="+encodeURIComponent(usuario)+ "&contraseña="+encodeURIComponent(password)

    //preventdefault detiene el evento submit
    evento.preventDefault();
    if(uss==usuario && pss==password){
        //window.location.href="" invoca una url
        window.location.href=(url+parametros)
    }else{
        if(contador<3){
            contador++
            alert("Datos incorrectos intento:" +contador)
            if(contador==3)
                boton.disabled=true
        }
            
    }
})