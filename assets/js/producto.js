
function mostrarAlerta() {
  var storedNumbers = JSON.parse(localStorage.getItem('carrito')) || [];
  if (storedNumbers.indexOf(localStorage.getItem('producto')) === -1) {
    var respuesta = confirm("¿Quieres agregar este producto al carrito?");
    
    if (respuesta) {
      console.log("Usuario confirmó: Agregar al carrito");
          // Agregar el número al array
          storedNumbers.push(localStorage.getItem('producto'));
          // Almacenar el array actualizado en localStorage
          localStorage.setItem('carrito', JSON.stringify(storedNumbers));
          // Mostrar el array en la consola (puedes quitar esto en la aplicación final)
          console.log("Array actualizado:", storedNumbers); 
      
    } else {
      console.log("Usuario canceló: No agregar al carrito");
    }
  } else {
    var respuesta = confirm("¿Quieres quitar este producto al carrito?");
    
    if (respuesta) {
      console.log("Usuario confirmó: quitar al carrito");
      var indexToRemove = storedNumbers.indexOf(localStorage.getItem('producto'));
      storedNumbers.splice(indexToRemove, 1);

      // Almacenar el array actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(storedNumbers));

      // Mostrar el array en la consola (puedes quitar esto en la aplicación final)
      console.log("Número quitado. Array actualizado:", storedNumbers);
    } else {
      console.log("Usuario canceló: No quitar al carrito");
    }
  }
  var aux = document.getElementById("boton")
  var storedNumbers = JSON.parse(localStorage.getItem('carrito')) || [];

  if (storedNumbers.indexOf(localStorage.getItem('producto')) === -1) {
    aux.textContent = "Agregar al Carrito"
  } else {
    aux.textContent = "Quitar del carrito"
  }
}

const APIurl = 'https://www.cheapshark.com/api/1.0/games?id='+localStorage.getItem('producto')
const body = document.querySelector("#main")
  // Función para crear la tabla HTML
  function crearTabla(array) {
    var tabla = '<table class="comparison-table">';
    tabla += "<tr><th>StoreID</th><th>Precio</th></tr>";

    for (var i = 0; i < array.length; i++) {
      tabla += '<tr >';
      tabla += "<td>" + array[i].storeID + "</td>";
      tabla += "<td>" + array[i].price + "</td>";
      tabla += "</tr>";
    }

    tabla += "</table>";

    return tabla;
  }
  function menor(array) {
    let val = 10000000000
    let i
    for (i of array) {
      val = Math.min(val,i.price)
    }
    return val
  }
const api_call = async() => {
  const APIResponse = await fetch(APIurl)
  const producto = await APIResponse.json()
  console.log(producto)
  document.title = producto.info.title
  var divTabla = document.getElementById("tabla")
  divTabla.innerHTML = crearTabla(producto.deals)
  var aux = document.getElementById("img")
  aux.src = producto.info.thumb
  var aux = document.getElementById("precio")
  aux.textContent = '$ '+menor(producto.deals)
  var aux = document.getElementById("titulo")
  aux.textContent = producto.info.title
  var aux = document.getElementById("ahorro")
  aux.textContent = 'SteamID: '+producto.info.steamAppID
  var aux = document.getElementById("boton")
  var storedNumbers = JSON.parse(localStorage.getItem('carrito')) || [];

  if (storedNumbers.indexOf(localStorage.getItem('producto')) === -1) {
    aux.textContent = "Agregar al Carrito"
  } else {
    aux.textContent = "Quitar del carrito"
  }
}

api_call()

