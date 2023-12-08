let APIurl = 'https://www.cheapshark.com/api/1.0/games?id='
let array1 =[]
let array2= []
function crearTabla() {
  var tabla = '<table class="comparison-table">';
  tabla += "<th>titulo</th><th>Precio</th></tr>";

  for (var i = 0; i < array1.length; i++) {
    tabla += '<tr >';
    tabla += "<td>" + array2[i] + "</td>";
    tabla += "<td>" + array1[i] + "</td>";
    tabla += "</tr>";
    console.log(array1[i],array2[i])
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
let numero = 0
const api_call = async() => {
  const APIResponse = await fetch(APIurl+numero)
  const producto = await APIResponse.json()

  array1.push(menor(producto.deals))
  array2.push(producto.info.title)
}


const crear = async() => {
  
  let arr = JSON.parse(localStorage.getItem('carrito'))
for (let i of arr) {
  numero = parseInt(i)
  await api_call()
}
var divTabla = document.getElementById("tabla")
divTabla.innerHTML = crearTabla()


          // Calcula el total sumando los precios de los productos
          var total = 0;
          var prices = document.querySelectorAll('tbody td:nth-child(2)'); // Selecciona las celdas de precio
          prices.forEach(function(price) {
            total += parseFloat(price.textContent.replace('$', ''));
          });
    
          // Muestra el total en el contenedor
          document.getElementById('total-container').textContent = 'Total: $' + total.toFixed(2);
}


crear()

function comprar() {
  alert('Gracias por su compra :D')
  window.location.href = '../index.html'
  localStorage.removeItem('carrito')
}