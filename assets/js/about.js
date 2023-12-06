const APIurl ='https://www.gravatar.com/avatar/';
const APIparam = '?d=robohash&f=y&s=128';
const arr = ['58eb4579bb69dab91f484762e32dacc3',
  '9756184a2dbd835585b6b90533e187aa',
  'e0826d4df70af112709c2d456bbc8cbf',
  '71562c3bcbf1809dd47c57d66c015524',
  'fd30136f8ae1297d43179626409217be',
  '0f5b22d4dfa54cb156d62562ee53799c',
  'f9a57cbcc49bd1d34f79ff7bc2ecc6a6',
  'c9962bab8e56ea107de35a768906b182',
  '35e1571273523557caa4f1451f8e87c5',
  'bba5206d51db785eec1976474122429c',
  'c44938f37f9177414a7888b1237b05ea','6b2e0e7493fc66bbec1807a8e8570cc8']
const principal = document.querySelector("#main")
const nombre = ["Victor","Erwin","Juan","Carlos","Adrian","Kevin","Gerardo","Ariel","Maria","Andres","Jorge","Efren"]
const apellido = ["Jaramillo","Lopez","Perez","Sutti","Muro","Pachecon","ZZZepeda","Monserrat","Paredes","Lomeli","Ochoa","Flores"]
const puesto = ["CEO","El que trae el cafe","Director en tecnologia","Barrendero","Programador","Analista","Guardia de seguridad","Gerente","Tester","Coach motivacional","Despedido por salirse de la carrera :')","Otro desertor"]
const apiCall = async() => {

  for (let i=0;i<12;i++) {
    const APIresponse = await fetch(APIurl+arr[i]+APIparam)
    let divContainer = document.createElement("div")
    divContainer.classList.add("developer-container")
    let divInfo = document.createElement("div")
    divInfo.classList.add("developer-info")
    let imgElement = document.createElement("img")
    imgElement.src = APIresponse.url
    imgElement.classList.add("developer-image")
    divInfo.appendChild(imgElement)
    let h3 = document.createElement("h3")
    h3.textContent = nombre[i]
    let p1 = document.createElement("p")
    p1.textContent = apellido[i]
    let p2 = document.createElement("p")
    p2.textContent = puesto[i]
    divInfo.appendChild(h3)
    divInfo.appendChild(p1)
    divInfo.appendChild(p2)
    divContainer.appendChild(divInfo)
    principal.appendChild(divContainer)
    principal.appendChild(document.createElement("br"))
  }
}

apiCall()