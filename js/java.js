/*let footer = ` 


<div class="pie"><br>
<div align="center">

<a href="https://www.facebook.com/?locale=es_LA"  target="_blank"><img class="iconfoot" src="img/facebook.png"></a>

<a href="https://www.instagram.com/"  target="_blank"><img class="iconfoot" src="img/instagram.png"></a>



<h5 align="center">Derechos reservados @2023</h5>
</div>   

`
document.getElementById("footer").innerHTML = footer*/

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


//Validacion de Formulario

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


