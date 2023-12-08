
let user = []
let pass = []
const api_call = async() => {
  const x = await fetch('https://fakestoreapi.com/users')
  const y = await x.json()
  console.log(y)
  for (let i=0;i<10;i++) {
    user.push(y[i].username)
    pass.push(y[i].password)
  }
}

function validarFormulario() {
  var username = document.getElementById('usuario').value;
  var password = document.getElementById('contrasena').value;
  for (let i=0;i<10;i++) {
    if (username == user[i] && password == pass[i]) {
      alert('Usuario o contraseña correctos');
      window.location.href = "carrito.html"
      return false;
    }
  }
  alert('Usuario o contraseña incorrectos');
  return false
}

api_call()



