function scrollTo(element) {
    window.scroll({
      left: 0,
      top:  document.querySelector(`${element}`).offsetTop,
      behavior: 'smooth'
    })
}
let _square = 0;
let _cleaningType = "";
let _serviceName = [];

function totalCost({square = _square, cleanType = _cleaningType, servicesName = _serviceName} = {}) {
    let totalCost = 0;
    _square = square;
    _cleaningType = cleanType;
    // _serviceName = servicesName;
    let modal_price_sum = document.querySelector('.modal_price-sum').querySelector('span');
    var serviceCost = new Map();
    serviceCost.set('Холодильник', 250)
                .set('Внутри кухонных шкафчиков', 350)
                .set('Вытяжка', 300)
                .set('Стирка', 150)
                .set('Микроволновка', 250)
                .set('Глажка', 250)
                .set('Духовка', 450)
                .set('Доп. поручения', 600);
    var typeCost = new Map();
    typeCost.set('Стандартная', 75).set('Послестроительная', 140).set("Генеральная", 125).set('Мойка окон', 250);

    

    if (cleanType != ""){
        totalCost = parseInt(square) * typeCost.get(cleanType);
    }

    if(servicesName != []){
        for (let i = 0; i < servicesName.length; i++){
            totalCost = totalCost + serviceCost.get(servicesName[i]);
            console.log("a" + serviceCost.get(servicesName));
        }
    }

    // console.log(square);
    // console.log(cleanType);
    console.log(servicesName);

    modal_price_sum.innerHTML = totalCost;
}

//Функции бургера
$(document).ready(function(){
    $('.header-burger').click(function(event){
        if(!$('.dropdown-content').hasClass('active_burger'))
        {
            $('.dropdown-content').addClass('active_burger');
        }
        else{
            $('.dropdown-content').removeClass('active_burger');
        }
    });
    $('.dropdown-element-mobile').click(function(event){
        $('.dropdown-content').removeClass('active_burger');
    });

});

// Функции открытия модальных окон

const body = document.querySelector('body');

const btns = document.querySelectorAll('.modal_button'); // Кнопка при которой происходит срабатывание функции
const modalsOverlay = document.querySelector('.modals-overlay'); //Задний фон
const modals = document.querySelectorAll('.modal');

btns.forEach((el) =>{
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        
        modals.forEach((el) =>{
            el.classList.remove('modal--visible');
          //  document.querySelector('body').style = "overflow: scroll;"
        })
        modalsOverlay.classList.add('modals-overlay--visible');
        document.querySelector(`[data-target=${path}]`).classList.add('modal--visible');
        body.classList.add('noscroll')
    })
})

modalsOverlay.addEventListener('click', (e) => {
    if(e.target == modalsOverlay){
        //Удаляем класс и окно закрывается
        body.classList.remove('noscroll')
        modalsOverlay.classList.remove('modals-overlay--visible');
        modals.forEach((el) =>{
            el.classList.remove('modal--visible');
        })
    }
})

// Скроллбар площади квартиры

const priceSlider = document.getElementById('m-slider');
let noUiSlider_values = document.querySelector('.modal_price-square-input');




document.addEventListener("DOMContentLoaded", () =>{
    noUiSlider.create(priceSlider, {
        start: 50,
        tooltips: false,
        connect: [true, false],
        step: 1,
        range: {
            min: 40,
            max: 100
        },
        format: {
            to: function (value){
                return parseInt(value)
            },
            from: function (value){
                return parseInt(value)
            }
        },
        pips: {
            mode: 'values',
            values: [40, 50, 60, 70, 80, 90, 100],
            density: 20,
        }
    });

    
    priceSlider.noUiSlider.on('update', function (values, handle) {
        noUiSlider_values.value = values[handle];
        if(window.innerWidth > 550){
            if(noUiSlider_values.value > 99){
                noUiSlider_values.style = 'width: 50px';
            }else{
                noUiSlider_values.style = 'width: 37px';
            }     
        }
        else{
            if(noUiSlider_values.value > 99){
                noUiSlider_values.style = 'width: 34px';
            }else{
                noUiSlider_values.style = 'width: 22px';
            } 
        }
        totalCost({square: noUiSlider_values.value});
    });
});



function input_onchange(e){
    priceSlider.noUiSlider.updateOptions({
        start: e,
    });
}


var typeCost = new Map();
typeCost.set('Стандартная', '75').set('Послестроительная', '140').set('Генеральная', '125').set('Мойка окон', '250');

// функции кнопок открытия блоков в расчете стоимости
const button_type = document.querySelector('#button-type');
const menu_button_type = document.querySelector('.modal-price-type_selection');

button_type.addEventListener('click', (e) => {
    if(!menu_button_type.classList.contains('modal_price-button-active')){
        menu_button_type.classList.add('modal_price-button-active');
        button_type.classList.add('button-type-active');
    }else{
        menu_button_type.classList.remove('modal_price-button-active');
        button_type.classList.remove('button-type-active');
    }
});

const button_add_services = document.querySelector('#button-add_services');
const modal_price_add_services = document.querySelector('.modal-price-add_services');

button_add_services.addEventListener('click', (e) => {
    if(!modal_price_add_services.classList.contains('modal_price-button-active')){
        modal_price_add_services.classList.add('modal_price-button-active');
        button_add_services.classList.add('button-type-active');

    }else{
        modal_price_add_services.classList.remove('modal_price-button-active');
        button_add_services.classList.remove('button-type-active');
    }
});

// button_call checkbox

const checkbox_call = document.getElementById('block_call_input');
const block_call_button = document.getElementById('block_call-button_id');

checkbox_call.addEventListener('click', (e) =>{
    if(document.querySelector('.custom-checkbox-active').style.opacity == 0){
        document.querySelector('.custom-checkbox-active').style.opacity = 1;
        block_call_button.classList.add('modal_price-button-select');
    }else{
        document.querySelector('.custom-checkbox-active').style.opacity = 0;
        block_call_button.classList.remove('modal_price-button-select');
    }
});


// Функции работы кнопок
const modal_price_button = document.querySelector(".modal_price-button");

let menu_button_type_list = menu_button_type.querySelectorAll('button');

menu_button_type_list.forEach((el) =>{
    el.addEventListener('click', (e) => {
        menu_button_type_list.forEach((el) =>{
            if(el.classList.contains('type_selection-active')) {
            el.classList.remove('type_selection-active');
            }
        });
        e.target.classList.add('type_selection-active');
        button_type.innerHTML = el.innerHTML;
        if(el.innerHTML == "Послестроительная"){
            document.getElementById('button-type').style = "min-width: 137px;";
            console.log(button_type.textContent);
            
        }else{
            document.getElementById('button-type').style = "min-width: 0px;";
            console.log(button_type.textContent);
        }
        modal_price_button.classList.add('modal_price-button-select');  
        totalCost({cleanType: el.textContent});
    });
});


let modal_price_add_services_list = modal_price_add_services.querySelectorAll('button');

var serviceCost = new Map();
serviceCost.set('Холодильник', '250').set('Внутри кухонных шкафчиков', '350').set('Вытяжка', '300').set('Стирка', '150').set('Микроволновка', '250').set('Глажка', '250').set('Духовка', '450').set('Доп. поручения', '600');

modal_price_add_services_list.forEach((el) =>{
    el.addEventListener('click', (e) => {
        if(e.target.classList.contains('type_selection-active') || e.target == el.querySelector('.add_services-counter-text')){
            el.classList.remove('type_selection-active');
            console.log(el);
            
            // if(!el.querySelector('.add_services-counter-text')){
            //     modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) - parseInt(serviceCost.get(el.textContent));
            // } else {
            //     modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) - parseInt(serviceCost.get(el.querySelector(".add_services-text").textContent));
            // } !!!!!!!!!!!!!!!!!!!
            var index = _serviceName.indexOf(el.textContent);
            _serviceName.splice(index, 1);
            totalCost();
        }
        else{
            el.classList.add('type_selection-active');
            console.log(el);

            // if(!el.querySelector('.add_services-counter-text')){
            //     modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) + parseInt(serviceCost.get(el.textContent));
            // } else {
            //     modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) + parseInt(serviceCost.get(el.querySelector(".add_services-text").textContent));
            // } !!!!!!!!!!!!!!!!!!!!!!!
            _serviceName.push(el.textContent);
            totalCost();
        }
        totalCost({servicesName: el.textContent});
    });
})


//Работа счетчика на кнопках доп.услуги
const services_button_prev = document.querySelectorAll('.add_services-counter-prev');
const services_button_next = document.querySelectorAll('.add_services-counter-next');

services_button_next.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.add_services-counter-per');
    counter_per.innerHTML =  parseInt(counter_per.innerHTML) + 1;
    
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) + parseInt(serviceCost.get(e.target.parentNode.querySelector('.type_selection-active').querySelector('.add_services-text').textContent));
  }); 
});

services_button_prev.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    const counter_per = e.target.parentNode.querySelector('.add_services-counter-per');
    if(counter_per.innerHTML > 1)
      counter_per.innerHTML =  parseInt(counter_per.innerHTML) - 1;
    //   !!!!!!!!!!!!!!!!modal_price_sum.innerHTML = parseInt(modal_price_sum.textContent) - parseInt(serviceCost.get(e.target.parentNode.querySelector('.type_selection-active').querySelector('.add_services-text').textContent));
  }); 
});