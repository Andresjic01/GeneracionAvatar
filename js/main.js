function avatar(){
    
    const campoNombre = document.getElementById("nombre");
    const mostrarNombre = document.getElementById("mostrar-nombre");

    mostrarNombre.innerText  = campoNombre.value;
}
function suma(){

    const campovalor1 = document.getElementById("Valor1").value;
    const campovalor2 = document.getElementById("Valor2").value;
    const mostrarNombre = document.getElementById("mostrar-nombre");

    let suma = 0;

    suma = parseInt(campovalor1) + parseInt(campovalor2);

    mostrarNombre.innerText = suma;

}

function avatarFull(){
    //capturamos los valores de los input y select
    const campofoto = document.getElementById("foto").value;
    const campoNombres = document.getElementById("nombre").value;
    const campoEmail = document.getElementById("email").value;
    const campoUsername = document.getElementById("userName").value;
    const campoRol = document.getElementById("rol").value;
    const campoColor = document.getElementById("color").value;

    //capturamos las etiquetas donde se mostrara la informacion
    const mostrarcolor = document.querySelectorAll(".right");
    const mostrarFoto = document.getElementById("foto-avatar-show");
    const mostrarUser = document.getElementById("userName-show");
    const mostrarRol= document.getElementById("rol-show");
    const mostrarSkill= document.getElementById("skills-show");
    const mostrarFotoUser= document.getElementById("foto-user-show");
    const mostrarNombre= document.getElementById("Nombre-show");

    //mostramos los datos directos
    mostrarUser.innerText  = campoUsername;
    mostrarRol.innerText = campoRol
    mostrarNombre.innerText  = campoNombres;

    //cambiamos el background segun color sellecionado
    mostrarcolor.forEach(Fondo => {
        Fondo.style.background = campoColor;
        
    });
    

    //cambiamos la foto y skiis del avatar segun rol selecionado



    
}