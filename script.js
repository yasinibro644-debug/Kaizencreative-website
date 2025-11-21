// SHOW MENU

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click' , () =>{
    menu.classList.toggle('show_menu');
});

// COLLECTION SWIPER

var swiper = new Swiper('.collectionSwiper',{
    slidesPerView: 4,
    spaceBetween: 15,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView: 4.
        },
        900:{
            slidesPerView: 2,
        },
        500:{
            slidesPerView: 1,
        },
    },
});