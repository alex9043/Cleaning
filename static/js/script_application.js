
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
const choose_cleaning_radio = document.querySelectorAll('.slide-choose_cleaning-content-radio');

if(document.body.clientWidth > 570){
  choose_cleaning_block.forEach((el, index) =>{
    el.addEventListener('click', (e) => {
      choose_cleaning_block.forEach((element, index) =>{
        if(choose_cleaning_image[index].classList.contains('choose_cleaning_active')){
          choose_cleaning_image[index].classList.remove('choose_cleaning_active');
          choose_cleaning_radio[index].check = false;
        }
      });
      choose_cleaning_image[index].classList.add('choose_cleaning_active');
      choose_cleaning_radio[index].check = true;
    });
  });
}
else{
  choose_cleaning_block.forEach((el, index) =>{
    el.addEventListener('click', (e) => {
      choose_cleaning_block.forEach((element, index) =>{
        if(element.classList.contains('choose_cleaning_active')){
          element.classList.remove('choose_cleaning_active');
          choose_cleaning_radio[index].check = false;
        }
      });
      el.classList.add('choose_cleaning_active');
      choose_cleaning_radio[index].check = true;
    });
  });
}

//Фукции для второго слайда

const slide_services = document.querySelectorAll('.slide-services-content'); // Кнопка при которой происходит срабатывание функции
const services_counter = document.querySelector('.services-counter');
const services_counter_per = document.querySelector('.services-counter-count-per');
const services_help = document.querySelectorAll('.slide-services-content-help');
const services_check = document.querySelectorAll('.slide-services-content-checkbox');
const services_number = document.querySelectorAll('.slide-services-number-checkbox');


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

slide_services.forEach((el, index) =>{
    el.addEventListener('click', (e) => {
      let status_help = false;
      services_help.forEach((help) =>{
        if(e.target.innerHTML == help.innerHTML){
         status_help = true
        }
      })
      const counter_per = el.querySelector('.services-counter-count-per');
      const name = el.querySelector('.slide-services-content-name');
      if(!status_help){
        if(e.target.innerHTML != services_counter.innerHTML && check_click(e.target) != false){
          if(el.classList.contains('services-active') && check_click(e.target) != false){
            el.classList.remove('services-active');
            services_check[index].checked = false;
            services_check[index].value = "";
            services_number[index].value = "";
          }else{
            el.classList.add('services-active');
            services_check[index].checked = true;
            services_check[index].value = name.innerHTML;
            services_number[index].value = parseInt(counter_per.innerHTML);
          } 
        }
      }
    })
})

const button_next = document.querySelectorAll('.services-counter-button-next');
const button_prev = document.querySelectorAll('.services-counter-button-prev');

button_next.forEach((el, index) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.services-counter-count-per');
    const serviceNumberA = e.target.parentNode.parentNode.querySelector('.slide-services-number-checkbox');
    console.log(serviceNumberA);
    counter_per.innerHTML =  parseInt(counter_per.innerHTML) + 1;
    serviceNumberA.value = parseInt(counter_per.innerHTML);
  }); 
});

button_prev.forEach((el, index) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.services-counter-count-per');
    const serviceNumberA = e.target.parentNode.parentNode.querySelector('.slide-services-number-checkbox');
    if(counter_per.innerHTML > 1)
      counter_per.innerHTML =  parseInt(counter_per.innerHTML) - 1;
      serviceNumberA.value = parseInt(counter_per.innerHTML);
  }); 
});

