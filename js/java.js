let header = `

<div class="header-info">
    <li class="header-info-text"><a href="https://www.google.com.ar/maps" target="_blank">Av.Rivadavia 1234, CABA </a></li>
    <li class="header-info-text"><img src="./img/whatsapp_logo_icon_147205.png" alt=""> 1123456789 (SOLO WHATSAPP)</li>
    <li class="header-info-text">Atencion al cliente</li>
</div>

<div class="logo">
    <img src="img/trebol.ico" alt=""> <a href="./index.html"></a>
    <div class="nombre"><a href="index.html">La Fortuna </a></div>
</div>

<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn"><img src="./img/icono_menu.png" alt="iconomenu"></label>
    
    <ul>
        <li class="botones"><a href="./pedir.html">Pedinos</a></li>
        <li class="botones"><a href="./platos.html">Platos</a></li>
        <li class="botones"><a href="./sucursales.html">Sucursales</a></li>
        <li class="botones"><a href="./formulario.html">RR.HH.</a></li>
    </ul>
    
</nav>

`
document.getElementById("header").innerHTML = header 



let footer = ` 
  <div>
    <a href="https://www.facebook.com/?locale=es_LA"  target="_blank"><img class="iconfoot" src="img/facebook.png"></a>
            
    <a href="https://www.instagram.com/"  target="_blank"><img class="iconfoot" src="img/instagram.png"></a>
    </div>
            
  <h5>Derechos reservados @2023</h5>
          
`
document.getElementById("footer").innerHTML = footer


//  Codigo para el SLIDE
const slider = document.querySelector('.slides');
let isSliding = false;

function nextSlide() {
    if (!isSliding) {
        isSliding = true;
        const firstSlide = document.querySelector('.slide:first-child');
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            slider.appendChild(firstSlide);
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            isSliding = false;
        }, 500);
    }
}

setInterval(nextSlide, 4000); // Cambiar slide cada 4 segundos


//-------------------------------Validacion de Formulario

function validarEnviar() {
  if (document.fvalida.nombreyapellido.value.length == 0) {
      alert("Tiene que escribir su nombre")
      document.fvalida.nombreyapellido.focus()
      return 0
  }

  //valido la edad. tiene que ser entero mayor que 18
  edad = document.fvalida.edad.value
  edad = validarEntero(edad)
  document.fvalida.edad.value = edad
  if (edad == "") {
      alert("Tiene que introducir un número entero en su edad.")
      document.fvalida.edad.focus()
      return 0
  } else {
      if (edad < 18) {
          alert("Debe ser mayor de 18 años.")
          document.fvalida.edad.focus()
          return 0
      }
  }
  
  alert("Muchas gracias por enviar el formulario")
  document.fvalida.submit()
}

function validarEntero(valor) {
  //intento convertir a entero.
  //si era un entero no le afecta, si no lo era lo intenta convertir
  valor = parseInt(valor)

  //Compruebo si es un valor numérico
  if (isNaN(valor)) {
      //entonces (no es numero) devuelvo el valor cadena vacia
      return ""
  } else {
      //En caso contrario (Si era un número) devuelvo el valor
      return valor
  }
}


/** ------------------------------------------API----------------------------------------- */

/**  PERSONA 1 Obtener el contenedor donde se mostrará la información de la persona*/
const personaInfoContainer = document.getElementById('persona-info');

// Hacer una solicitud a la API de RandomUser
fetch('https://randomuser.me/api/')
    .then(response => response.json())  // Parsear la respuesta JSON
    .then(data => {
        // Obtener la primera persona de la lista
        const persona = data.results[0];

        // Construir el HTML con la información de la persona
        const html = `
            <img src="${persona.picture.large}" alt="Foto de la persona">
            <h2>${persona.name.first} ${persona.name.last}</h2>
            <p>Email: ${persona.email}</p>
            <p>Edad: ${persona.dob.age}</p>
            
        `;

        // Actualizar el contenido del contenedor con la información de la persona
        personaInfoContainer.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });




/**  PERSONA 2 Obtener el contenedor donde se mostrará la información de la persona*/
const personaInfo2Container = document.getElementById('persona-info2');

// Hacer una solicitud a la API de RandomUser
fetch('https://randomuser.me/api/')
    .then(response => response.json())  // Parsear la respuesta JSON
    .then(data => {
        // Obtener la primera persona de la lista
        const persona = data.results[0];

        // Construir el HTML con la información de la persona
        const html = `
            <img src="${persona.picture.large}" alt="Foto de la persona">
            <h2>${persona.name.first} ${persona.name.last}</h2>
            <p>Email: ${persona.email}</p>
            <p>Edad: ${persona.dob.age}</p>
            
        `;

        // Actualizar el contenido del contenedor con la información de la persona
        personaInfo2Container.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });


/**  PERSONA 3 Obtener el contenedor donde se mostrará la información de la persona*/
const personaInfo3Container = document.getElementById('persona-info3');

// Hacer una solicitud a la API de RandomUser
fetch('https://randomuser.me/api/')
    .then(response => response.json())  // Parsear la respuesta JSON
    .then(data => {
        // Obtener la primera persona de la lista
        const persona = data.results[0];

        // Construir el HTML con la información de la persona
        const html = `
            <img src="${persona.picture.large}" alt="Foto de la persona">
            <h2>${persona.name.first} ${persona.name.last}</h2>
            <p>Email: ${persona.email}</p>
            <p>Edad: ${persona.dob.age}</p>
            
        `;

        // Actualizar el contenido del contenedor con la información de la persona
        personaInfo3Container.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

