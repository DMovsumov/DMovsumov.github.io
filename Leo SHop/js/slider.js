var slideIndex = 1;
showSlider(slideIndex);
autoSlider()

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function slideIncrement() {
    showSlider(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function slideDecrement() {
    showSlider(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlider(slideIndex = n);
}

/* Основная функция слайдера */
function showSlider(n) {
    var slides = document.querySelectorAll(".item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function autoSlider() {
    let slides = document.querySelectorAll('.item')
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++
    if(slideIndex > slides.length) {
        slideIndex = 1        
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoSlider, 10000)   
}