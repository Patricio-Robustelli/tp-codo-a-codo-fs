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


