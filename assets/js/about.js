const APIurl ='https://www.gravatar.com/avatar/';
const APIparam = '?d=robohash&f=y&s=128';
const arr = ['c481111986322c0e2b2f10c4ac841d87','c80914011a55332b7a2c799a374da8d9','5075cd2c19d54444dc06843095a3f0c8','b54e4e98d952c8b844aa1f3136869f32','60b2f0c8eebdb5a38b811631d2c6db1f','287653d6cbbaab203c59d90f91def70c','87a1580e0c11fb71fae21d80d2d29855','caaddfaeedba0f27730b41c7d1b55a89','cff0654facb9d27d04b989c893ed87cd','8d6d69c7636d0236d547f1b370213701','1bf05f3131672d8a3783927daf2ffc2d','e083fae9d371b1d00fa657cb87118d75']
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