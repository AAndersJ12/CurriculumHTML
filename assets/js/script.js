
const registro = document.querySelector('#formulario');


registro.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const genero = document.querySelector('#genero').value;
    const fecnacimiento = document.querySelector('#fecnacimiento').value;
    const correo = document.querySelector('#correo').value;
    const usuario = document.querySelector('#usuario').value;
    const cedula = document.querySelector('#cedula').value;
    const contrasena = document.querySelector('#contrasena').value;
    const habitacion = document.querySelector('#habitacion').value;

    /*la validacion*/

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioregistrado = usuarios.find(usuario => usuario.correo === correo);

    contrasenaIgual()

    if(usuarioregistrado){
        return alert("Este usuario está registrado");
    }

        usuarios.push({nombre:nombre, apellido:apellido, genero:genero, fecnacimiento:fecnacimiento, correo:correo, usuario:usuario, cedula:cedula, contrasena:contrasena, habitacion:habitacion})
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("usuario registrado");
        window.location.href="index.html";
    })

/*Repetir contraseña*/

const salir = document.getElementById('#logout');
salir.addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.removeItem("usuarios");
    window.location.href="index.html";
})

function log_out(){
    localStorage.removeItem("usuarios");
    window.location.href="index.html";
}

function contrasenaIgual() 
{
    const password = document.getElementById("contrasena").value;
    const confirm_password = document.getElementById("repetircontrasena").value;
    if (password !== confirm_password) 
    {
        alert("Las contraseñas introducidas no coinciden");
        return false;
    } 
    else 
    {
        return true;
    }
}

/*Validación*/
