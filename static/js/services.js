// ФУНКЦИИ РАБОТЫ СЛАЙДЕРА

// Работа выбора комнат
const nav = document.querySelector('.services-room-conteiner');
const nav_list = nav.querySelectorAll('li');
nav_list.forEach((el) =>{
    el.addEventListener('click', (e) => {
        nav_list.forEach((el) =>{
            el.classList.remove('services-room-active');
        });
        e.target.classList.add('services-room-active');
        slider_show();
    });
});

// Работа выбора вида уборки
const slide_mode = document.querySelector('.slide_mode-info');
const slide_mode_li_list = slide_mode.querySelectorAll('li');
let slide_mode_li = slide_mode.querySelector('li');

const slide_ul = document.querySelector('.services-content-info-list');
const slide_ul_list = slide_ul.querySelectorAll('li');
let slide_ul_li = slide_ul.querySelector('li');


const slide_mode_prev = document.querySelector('.slide_mode-prev');
const slide_mode_next = document.querySelector('.slide_mode-next');

slide_ul_list.forEach((el) => {
    el.addEventListener('click', (e) =>{
        let i = 0;
        let count_i;
        slide_ul_li.classList.remove('active-li')
        slide_ul_li = e.target;
        slide_ul_li.classList.add('active-li');
        slide_ul_list.forEach((element) =>{
            if(slide_ul_li == element){
                count_i = i;
            }else{i = i + 1 }
        })
       
        slide_mode_li.classList.remove('slide_mode-info-active');
        slide_mode_li_list[count_i].classList.add('slide_mode-info-active');
        slide_mode_li = slide_mode_li_list[count_i];
        slider_show()
    });
})

slide_mode_prev.addEventListener('click', (e) => {
    if(slide_mode_li != slide_mode_li_list[0]){
        slide_mode_li.classList.remove('slide_mode-info-active');
        slide_mode_li.previousElementSibling.classList.add('slide_mode-info-active');
        slide_mode_li = slide_mode_li.previousElementSibling;

        slide_ul_li.classList.remove('active-li');
        slide_ul_li.previousElementSibling.classList.add('active-li');
        slide_ul_li = slide_ul_li.previousElementSibling;
    }
    slider_show()
});

slide_mode_next.addEventListener('click', (e) => {
    if(slide_mode_li != slide_mode_li_list[slide_mode_li_list.length-1]){
        slide_mode_li.classList.remove('slide_mode-info-active');
        slide_mode_li.nextElementSibling.classList.add('slide_mode-info-active');
        slide_mode_li = slide_mode_li.nextElementSibling;

        slide_ul_li.classList.remove('active-li');
        slide_ul_li.nextElementSibling.classList.add('active-li');
        slide_ul_li = slide_ul_li.nextElementSibling;
    }
    slider_show()   
});

// переключение слайдов

const services_slider = document.querySelector('.services-slider');
let services_slider_list = services_slider.querySelectorAll('img');


const services_text = document.querySelector('.services-slider-text-list');
const services_text_list = services_text.querySelectorAll('ul');
let services_text_active = services_text_list[0];
let slider_head = document.querySelector('.slide_mode-bottom_text');

function slider_show(){
    let active_slide = document.querySelector('.slide_mode-info-active');

    // if(active_slide.innerHTML == "Послестроительная уборка" || active_slide.innerHTML == "Поддерживающая уборка"){
    //     return;
    // }

    services_slider_list.forEach((el) =>{
        if(el.classList.contains('services-slider-slide-active')){
            el.classList.remove('services-slider-slide-active');
        }
    });

    if(active_slide.innerHTML == "Стандартная уборка"){
        slider_head.innerHTML = `<p>Уборка на высоту до 1,8 м</p>
        <div><span>75 р/м<sup>2</sup></span><span>2-4 часа</span></div>`
    }
    if(active_slide.innerHTML == "Генеральная уборка"){
        slider_head.innerHTML = `<p>Уборка на высоту всю высоту</p>
        <div><span>125 р/м<sup>2</sup></span><span>6-8 часов</span></div>`
    }
    if(active_slide.innerHTML == "Послестроительная уборка"){
        slider_head.innerHTML = `<p>Уборка на высоту всю высоту</p>
        <div><span>140 р/м<sup>2</sup></span><span>6-8 часов</span></div>`
    }
    if(active_slide.innerHTML == "Поддерживающая уборка"){
        slider_head.innerHTML = `<p>Уборка на высоту до 1,8 м</p>
        <div><span>до 65 р/м<sup>2</sup></span><span>2-4 часа</span></div>`
    }
    if(active_slide.innerHTML == "Мойка окон"){
        slider_head.innerHTML = `<p>Уборка на высоту всю высоту</p>
        <div><span>Створка 250р.</span></div>`
    }


    if(active_slide.innerHTML == "Мойка окон"){ 
        services_slider.querySelector('#slide-window').classList.add('services-slider-slide-active');
        services_text_active.classList.remove('text_list-active');
        services_text_active = services_text_list[8];
        services_text_active.classList.add('text_list-active');
    }

    if(active_slide.innerHTML == "Поддерживающая уборка"){ 
        services_slider.querySelector('#slide-pod').classList.add('services-slider-slide-active');
        services_text_active.classList.remove('text_list-active');
        services_text_active = services_text_list[7];
        services_text_active.classList.add('text_list-active');
    }else{
        services_slider.querySelector('#slide-pod').classList.remove('services-slider-slide-active');
    }

    if(active_slide.innerHTML == "Послестроительная уборка"){ 
        services_slider.querySelector('#slide-pos').classList.add('services-slider-slide-active');
        services_text_active.classList.remove('text_list-active');
        services_text_active = services_text_list[6];
        services_text_active.classList.add('text_list-active');
    }else{
        services_slider.querySelector('#slide-pos').classList.remove('services-slider-slide-active');
    }

    let services_room = document.querySelector('.services-room-active');
    if(services_room.innerHTML == "Кухня"){
        if(active_slide.innerHTML == "Стандартная уборка"){
            services_slider.querySelector('#slide-k-s').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[1];
            services_text_active.classList.add('text_list-active');
        }
        if(active_slide.innerHTML == "Генеральная уборка"){
            services_slider.querySelector('#slide-k-g').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[5];
            services_text_active.classList.add('text_list-active');
        }
    }

    if(services_room.innerHTML != "Кухня" && services_room.innerHTML != "С/У"){
        if(active_slide.innerHTML == "Стандартная уборка"){
            services_slider.querySelector('#slide-sp-s').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[0];
            services_text_active.classList.add('text_list-active');
        }
        if(active_slide.innerHTML == "Генеральная уборка"){
            services_slider.querySelector('#slide-sp-g').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[2];
            services_text_active.classList.add('text_list-active');
        }
    }

    if(services_room.innerHTML == "С/У"){
        if(active_slide.innerHTML == "Стандартная уборка"){
            services_slider.querySelector('#slide-sy-s').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[3];
            services_text_active.classList.add('text_list-active');
        }
        if(active_slide.innerHTML == "Генеральная уборка"){
            services_slider.querySelector('#slide-sy-g').classList.add('services-slider-slide-active');
            services_text_active.classList.remove('text_list-active');
            services_text_active = services_text_list[4];
            services_text_active.classList.add('text_list-active');
        }
    }
}
