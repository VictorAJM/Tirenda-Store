function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
  }
  return result;
}
let retardo = 100
function generateRandomMD5Hash() {
  const randomString = generateRandomString(32); // 32 characters for a 128-bit hash
  const md5Hash = md5(randomString);
  return md5Hash;
}

const randomMD5Hash = generateRandomMD5Hash();
console.log(randomMD5Hash);
    function obtenerRating() {
      var apiurl =  'https://codeforces.com/api/user.info?handles=Chaska'
      fetch(apiurl).then((response)=> response.json()).then((userInformation)=> {
        
        // Create a div to display user information
        var userContainer = document.createElement("div");
        userContainer.id = "userContainer"; // Add id to the div

        // Create an image element for the profile picture
        var profilePicture = document.createElement("img");
        profilePicture.id = "profilePicture"; // Add id to the image
        profilePicture.alt = "Profile Picture";
        
        // Append the profile picture to the user container
        userContainer.appendChild(profilePicture);
        profilePicture.src = userInformation.result[0].titlePhoto
        let p = document.createElement("p")
        let s = document.createElement("b")
        s.textContent = "handle:"
        p.textContent = userInformation.result[0].handle
        let p1 = document.createElement("p")
        let s1 = document.createElement("b")
        s1.textContent = "Rank:"
        p1.textContent = userInformation.result[0].rank
        let p2 = document.createElement("p")
        let s2 = document.createElement("b")
        s2.textContent = "Rating:"
        p2.textContent = userInformation.result[0].rating
        let p3 = document.createElement("p")
        let s3 = document.createElement("b")
        s3.textContent = "organization:"
        p3.textContent = userInformation.result[0].organization
        // Append the user container to the body
        document.body.appendChild(userContainer);
        document.body.appendChild(s);
        document.body.appendChild(p);
        document.body.appendChild(s1);
        document.body.appendChild(p1);
        document.body.appendChild(s2);
        document.body.appendChild(p2);
        document.body.appendChild(s3);
        document.body.appendChild(p3);
        console.log(userInformation)
      })
    }
    function obtenerImagenDeGato() {
        // URL de la API de gatos
        var apiUrl = "https://api.thecatapi.com/v1/images/search";

        // Realizar la solicitud a la API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Obtener la URL de la imagen del gato
                var imageUrl = data[0].url;

                // Mostrar la imagen en una posición aleatoria de la ventana
                mostrarImagenAleatoria(imageUrl);
            })
            .catch(error => {
                console.error("Error al obtener la imagen del gato:", error);
            });
    }

    function mostrarImagenAleatoria(url) {
        // Crear un elemento de imagen y establecer la URL
        var imgElement = document.createElement("img");
        imgElement.src = url;

        // Establecer posición aleatoria en la ventana
        var randomX = Math.floor(Math.random() * (window.innerWidth - 500)); // Evitar que la imagen se desborde de la derecha
        var randomY = Math.floor(Math.random() * (window.innerHeight - 500)); // Evitar que la imagen se desborde de la parte inferior

        imgElement.style.left = randomX + "px";
        imgElement.style.top = randomY + "px";

        // Agregar la imagen al cuerpo del documento
        document.body.appendChild(imgElement);


    }
    function obtenerImagenDeRobot() {
        const xd = generateRandomMD5Hash()
        // URL de la API de gatos
      
        var apiUrl = "https://www.gravatar.com/avatar/"+xd+'?d=robohash&f=y&s=128';

        // Realizar la solicitud a la API
        fetch(apiUrl)
            .then(data => {
                // Obtener la URL de la imagen del gato
                var imageUrl = data.url;

                // Mostrar la imagen en una posición aleatoria de la ventana
                mostrarImagenAleatoria2(imageUrl);
            })
            .catch(error => {
                console.error("Error al obtener la imagen del gato:", error);
            });
    }

    function mostrarImagenAleatoria2(url) {
        // Crear un elemento de imagen y establecer la URL
        var imgElement = document.createElement("img");
        imgElement.src = url;

        // Establecer posición aleatoria en la ventana
        var randomX = Math.floor(Math.random() * (window.innerWidth - 300)); // Evitar que la imagen se desborde de la derecha
        var randomY = Math.floor(Math.random() * (window.innerHeight - 300)); // Evitar que la imagen se desborde de la parte inferior

        imgElement.style.left = randomX + "px";
        imgElement.style.top = randomY + "px";

        // Agregar la imagen al cuerpo del documento
        document.body.appendChild(imgElement);


    }
    // Generar una nueva imagen cada 2 segundos
    setInterval(obtenerImagenDeGato, 1000);
    // Generar una nueva imagen cada 2 segundos
    setInterval(obtenerImagenDeRobot, 500);

    setInterval(obtenerRating,5000)