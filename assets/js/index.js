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

const productos_generales_api_call = async () => {
    const APIResponse = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1')
    
    const deals = await APIResponse.json()
    for (let i=0;i<6;i++) {
    
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
      container.appendChild(priceDiv)
      container.appendChild(ratingDiv)
      container.appendChild(savingDiv)
      container.addEventListener('click',function() {
        console.log(container.dataset.number)
      })
      Productos.append(container)
    }
}
carousel_api_call()

productos_generales_api_call() 
