const APIurl = 'https://www.cheapshark.com/api/1.0/'
const Carrusel = document.querySelector("#MyCarouselInner")
const Productos = document.querySelector("#ProductosGenerales")
const carousel_api_call = async () => {
  const APIResponse = await fetch(APIurl+'games?title=minecraftlegends');
  var screenHeight = window.innerHeight || document.documentElement.clientHeight;
  var targetHeight = screenHeight * 0.70;
  const productos = await APIResponse.json()

  var CarouselItem = document.createElement("div")
  CarouselItem.classList.add("carousel-item","active")
  var imgElement = document.createElement("img")
  imgElement.src = productos[0].thumb

  
  // Set the height of the image
  imgElement.style.height = targetHeight + "px";
  imgElement.classList.add("d-block","w-100")
  var textoAbajo = document.createElement("div")
  textoAbajo.classList.add("carousel-caption","d-none","d-md-block")
  var _h5 = document.createElement("h5")
  _h5.textContent = productos[0].external
  var _p = document.createElement("p")
  _p.textContent = productos[0].cheapest
 
  textoAbajo.appendChild(_h5)
  textoAbajo.appendChild(_p)
  CarouselItem.appendChild(imgElement)
  CarouselItem.appendChild(textoAbajo)
  Carrusel.appendChild(CarouselItem)


  const APIResponse2 = await fetch(APIurl+'games?title=batman');

  const productos2 = await APIResponse2.json()

  CarouselItem = document.createElement("div")
  CarouselItem.classList.add("carousel-item")
  imgElement = document.createElement("img")
  imgElement.src = productos2[0].thumb
  imgElement.classList.add("d-block","w-100")
  imgElement.style.height = targetHeight + "px";
   textoAbajo = document.createElement("div")
  textoAbajo.classList.add("carousel-caption","d-none","d-md-block")
  _h5 = document.createElement("h5")
  _h5.textContent = productos2[0].external
   _p = document.createElement("p")
  _p.textContent = productos2[0].cheapest

  textoAbajo.appendChild(_h5)
  textoAbajo.appendChild(_p)
  CarouselItem.appendChild(imgElement)
  CarouselItem.appendChild(textoAbajo)
  Carrusel.appendChild(CarouselItem)

  const APIResponse3 = await fetch(APIurl+'games?title=plantsvs');

  const productos3 = await APIResponse3.json()

  CarouselItem = document.createElement("div")
  CarouselItem.classList.add("carousel-item")
  imgElement = document.createElement("img")
  imgElement.src = productos3[0].thumb
  imgElement.classList.add("d-block","w-100")
  imgElement.style.height = targetHeight + "px";
   textoAbajo = document.createElement("div")
  textoAbajo.classList.add("carousel-caption","d-none","d-md-block")
  _h5 = document.createElement("h5")
  _h5.textContent = productos3[0].external
   _p = document.createElement("p")
  _p.textContent = productos3[0].cheapest

  textoAbajo.appendChild(_h5)
  textoAbajo.appendChild(_p)
  CarouselItem.appendChild(imgElement)
  CarouselItem.appendChild(textoAbajo)
  Carrusel.appendChild(CarouselItem)
  const APIResponse4 = await fetch(APIurl+'games?title=BioShock');

  const productos4 = await APIResponse4.json()

  CarouselItem = document.createElement("div")
  CarouselItem.classList.add("carousel-item")
  imgElement = document.createElement("img")
  imgElement.src = productos4[0].thumb
  imgElement.classList.add("d-block","w-100")
  imgElement.style.height = targetHeight + "px";
   textoAbajo = document.createElement("div")
  textoAbajo.classList.add("carousel-caption","d-none","d-md-block")
  _h5 = document.createElement("h5")
  _h5.textContent = productos4[0].external
   _p = document.createElement("p")
  _p.textContent = productos4[0].cheapest

  textoAbajo.appendChild(_h5)
  textoAbajo.appendChild(_p)
  CarouselItem.appendChild(imgElement)
  CarouselItem.appendChild(textoAbajo)
  Carrusel.appendChild(CarouselItem)
}
let contexto="storeID=1"
const productos_generales_api_call = async () => {
    const APIResponse = await fetch('https://www.cheapshark.com/api/1.0/deals?'+contexto)
    
    const deals = await APIResponse.json()
    console.log("#")

    // Elimina todos los divs hijos
    while (Productos.firstChild) {
      Productos.removeChild(Productos.firstChild);
    }
    for (let i=0;i<60;i++) {
    
      let price = deals[i].salePrice
      let title = deals[i].title
      let rating = deals[i].dealRating
      let onSale = deals[i].isOnSale
      let saving = deals[i].savings
      let thumb = deals[i].thumb
      let container = document.createElement("div")
      container.classList.add("product-container","number-container")
      container.dataset.number = deals[i].gameID
      let imgElement = document.createElement("img")
      imgElement.classList.add("product-image")
      imgElement.src=thumb
      let priceDiv = document.createElement("div")
      priceDiv.classList.add("product-price")
      priceDiv.textContent='$ '+price
      let titleDiv = document.createElement("div")
      titleDiv.classList.add("product-name")
      titleDiv.textContent=title
      let savingDiv = document.createElement("div")
      savingDiv.classList.add("savings")
      savingDiv.textContent='Ahorro: '+parseInt(saving)+'%'
      let ratingDiv = document.createElement("div")
      ratingDiv.classList.add("product-rating")
      ratingDiv.textContent='Rating: '+rating

      container.appendChild(imgElement)
      container.appendChild(titleDiv)
      container.appendChild(ratingDiv)
      container.addEventListener('click',function() {
        localStorage.setItem('producto',container.dataset.number)
        console.log(container.dataset.number)
        window.location.href = '../../pages/producto.html'
      })
      Productos.append(container)
    }
}
carousel_api_call()

productos_generales_api_call() 


function validarFormulario() {
  // ... (la lógica de validación permanece sin cambios)
  var storeID = document.getElementById("storeID").value;
var precioMinimo = document.getElementById("precioMinimo").value;
var precioMaximo = document.getElementById("precioMaximo").value;
var titulo = document.getElementById("titulo").value;

// Validar que los campos requeridos no estén vacíos
if (storeID === "" || precioMinimo === "" || precioMaximo === "" || titulo === "") {
  alert("Todos los campos son obligatorios.");
  return false;
}

// Validar que los campos de categoría, storeID y rango de precios sean números enteros
if ( !Number.isInteger(parseInt(storeID)) || !Number.isInteger(parseInt(precioMinimo)) || !Number.isInteger(parseInt(precioMaximo))) {
  alert("Las categorías, storeID y precios deben ser números enteros.");
  return false;
}
console.log("*")
// Resto de la lógica de validación aquí...
contexto = "storeID="+storeID+"&lowerPrice="+precioMinimo+"&upperPrice="+precioMaximo+"&title="+titulo
productos_generales_api_call()
// Enviar el formulario si todo es válido
alert("Formulario válido. Puedes enviarlo.");
return true;
}

// Event listener para el formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto
  validarFormulario();
});