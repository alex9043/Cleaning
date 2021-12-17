
// Скрипт для слайдера страницы ЗАКАЗА
var swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
});

// Скрипт нажатия на иконки первого слайда

const choose_cleaning_image = document.querySelectorAll('.slide-choose_cleaning-content-image');
const choose_cleaning_block = document.querySelectorAll('.slide-choose_cleaning-content-block');

if(document.body.clientWidth > 570){
  choose_cleaning_image.forEach((el) =>{
    el.addEventListener('click', (e) => {
      choose_cleaning_image.forEach((element) =>{
        if(element.classList.contains('choose_cleaning_active')){
          element.classList.remove('choose_cleaning_active');
        }
      });
      el.classList.add('choose_cleaning_active');
    });
  });
}
else{
  choose_cleaning_block.forEach((el) =>{
    el.addEventListener('click', (e) => {
      choose_cleaning_block.forEach((element) =>{
        if(element.classList.contains('choose_cleaning_active')){
          element.classList.remove('choose_cleaning_active');
        }
      });
      el.classList.add('choose_cleaning_active');
    });
  });
}

//Фукции для второго слайда

const slide_services = document.querySelectorAll('.slide-services-content'); // Кнопка при которой происходит срабатывание функции
const services_counter = document.querySelector('.services-counter');
const services_counter_per = document.querySelector('.services-counter-count-per');
const services_help = document.querySelectorAll('.slide-services-content-help');


function check_click(click){
  for (let item of services_counter.children){
    if(item.innerHTML == click.innerHTML || click.innerHTML == services_counter_per.innerHTML){
      return false;
    }
  }
  return true;
}

function chech_help(e){
  services_help.forEach((help) =>{
    if(e.innerHTML == help.innerHTML){
      return false;
    }
  })
  return true;
}

slide_services.forEach((el) =>{
    el.addEventListener('click', (e) => {
      let status_help = false;
      services_help.forEach((help) =>{
        if(e.target.innerHTML == help.innerHTML){
         status_help = true
        }
      })
      if(!status_help){
        if(e.target.innerHTML != services_counter.innerHTML && check_click(e.target) != false){
          if(el.classList.contains('services-active') && check_click(e.target) != false){
            el.classList.remove('services-active');
          }else{
            el.classList.add('services-active');
          }
        }else {el.classList.add('services-active');}  
      }

    })
})

const button_next = document.querySelectorAll('.services-counter-button-next');
const button_prev = document.querySelectorAll('.services-counter-button-prev');

button_next.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.services-counter-count-per');
    counter_per.innerHTML =  parseInt(counter_per.innerHTML) + 1;
  }); 
});

button_prev.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.services-counter-count-per');
    if(counter_per.innerHTML > 1)
      counter_per.innerHTML =  parseInt(counter_per.innerHTML) - 1;
  }); 
});

