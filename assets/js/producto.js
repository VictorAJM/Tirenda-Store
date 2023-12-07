const APIurl = 'https://www.cheapshark.com/api/1.0/games?id='+localStorage.getItem('producto')
const body = document.querySelector("#main")
  // Función para crear la tabla HTML
  function crearTabla(array) {
    var tabla = "<table>";
    tabla += "<tr><th>Precio</th><th>Porcentaje</th><th>StoreID</th></tr>";

    for (var i = 0; i < array.length; i++) {
      tabla += "<tr>";
      tabla += "<td>" + array[i].price + "</td>";
      tabla += "<td>" + parseInt(array[i].savings) + "</td>";
      tabla += "<td>" + array[i].storeID + "</td>";
      tabla += "</tr>";
    }

    tabla += "</table>";

    return tabla;
  }
const api_call = async() => {
  const APIResponse = await fetch(APIurl)
  const producto = await APIResponse.json()
  console.log(producto)
  document.title = producto.info.title
  var divTabla = document.getElementById("tabla")
  divTabla.innerHTML = crearTabla(producto.deals)
}

api_call()