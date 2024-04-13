(function(){
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        
        value = currentElement;
        value+= change;

        if(value == 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');
    }
})();

const Facebook = document.getElementById("Facebook"),
 Instagram = document.getElementById("Instagram"),
 Contacto = document.getElementById("Contacto"),
 Contactame = document.getElementById("Contactame");


Facebook.addEventListener("click", (e)=>{
    open("https://www.facebook.com/profile.php?id=100065378654562")
})

Instagram.addEventListener("click", (e)=>{
    open("https://www.instagram.com/dr_mark_rodriguez/")
})

Contacto.addEventListener("click", (e)=>{
    open("https://www.whatsapp.com/")
})

Contactame.addEventListener("click", (e)=>{
    open("https://www.whatsapp.com/")
})
