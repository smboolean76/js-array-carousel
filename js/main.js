/*------------------------
    FUNCTIONS
-------------------------*/
function nextSlide() {
    items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === images.length - 1 ) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    items[currentImageIndex].classList.add("active");
}

function prevSlide() {
    items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === 0 ) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex--;
    }
    items[currentImageIndex].classList.add("active");
}

// Definisco l'array delle immagini
const images = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// seleziono il contenitore delle mie immagini
const itemsContainer = document.querySelector(".items");
// ciclo sull'array delle immagini
for( let i = 0; i < images.length; i++ ) {
    const srcImg = images[i];
    // creo l'item che dovrò inserire nella pagina
    const item = `
    <div class="item">
        <img src="${srcImg}" alt="">
    </div>
    `;
    // items.innerHTML = items.innerHTML + item;
    itemsContainer.innerHTML += item;
}

// stato dello slider
let currentImageIndex = 0;
// seleziono tutti gli items
const items = document.querySelectorAll(".item");
// seleziono il primo item creato in precedenza e aggiungo la classe active
items[currentImageIndex].classList.add("active");

// seleziono il pulsante next
const nextBtn = document.querySelector(".next");
// aggiungo l'evento click al pulsante next
nextBtn.addEventListener("click", nextSlide);

let autoplay = setInterval(nextSlide, 2000);

// seleziono il pulsante prev
const prevBtn = document.querySelector(".prev");
// aggiungo l'evento click al pulsante prev
prevBtn.addEventListener("click", prevSlide);

// blocco l'autoplay
itemsContainer.addEventListener('mouseenter', function() {
    console.log('mouseenter');
    clearInterval(autoplay);
});
// riavvia l'autoplay
itemsContainer.addEventListener('mouseleave', function() {
    autoplay = setInterval(nextSlide, 2000);
});