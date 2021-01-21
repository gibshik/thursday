const imagesSlides = document.querySelectorAll(".image-to-show");
let activeSlide = document.querySelector('.active-slide');


setInterval(slideBySlide, 3000)


function slideBySlide() {

    for (let i = 0; i < imagesSlides.length; i++) {
        if (activeSlide === imagesSlides[i]) {


            activeSlide.classList.remove('active-slide');
            activeSlide = imagesSlides[i + 1]
            if (!activeSlide) {


                activeSlide = imagesSlides[0]
            }
            activeSlide.classList.add('active-slide');
            break


        }
    }


}