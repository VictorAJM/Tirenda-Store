const APIurl = 'https://www.cheapshark.com/api/1.0/'
const Carrusel = document.querySelector("#MyCarouselInner")
const carousel_api_call = async () => {
  const APIResponse = await fetch(APIurl+'games?title=minecraftlegends');
  var screenHeight = window.innerHeight || document.documentElement.clientHeight;
  var targetHeight = screenHeight * 0.70;
  const productos = await APIResponse.json()
  console.log(productos)
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
  console.log(productos[0].external)
  console.log(productos[0].cheapest)
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
  console.log(productos2[0].external)
  console.log(productos2[0].cheapest)
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
  console.log(productos3[0].external)
  console.log(productos3[0].cheapest)
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
  console.log(productos4[0].external)
  console.log(productos4[0].cheapest)
  textoAbajo.appendChild(_h5)
  textoAbajo.appendChild(_p)
  CarouselItem.appendChild(imgElement)
  CarouselItem.appendChild(textoAbajo)
  Carrusel.appendChild(CarouselItem)
}


carousel_api_call()

