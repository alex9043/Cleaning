document.body.onload = function(){
    setTimeout(function(){
        var preloader_text_top = document.querySelector('.preloader-text-top');
        if(preloader_text_top.classList.contains('done')){
            preloader_text_top.classList.remove('done');
        }
    }, 1000);
    setTimeout(function(){
        var preloader_text_bot = document.querySelector('.preloader-text-bot');
        if(preloader_text_bot.classList.contains('done')){
            preloader_text_bot.classList.remove('done');
        }
    }, 2500);
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 4000);
}   

// КОД ДЛЯ ОТОБРАЖЕНИЯ ПРОЦЕНТНОЙ ЗАГРУЗКИ САЙТА

// var
//     images               =  document.images,
//     images_total_count   =  images.length,
//     images_loaded_count  =  0,
//     preloader            =  document.getElementById('page-preloader'),
//     perc_display         =  0,
//     logo_height          =  document.getElementById('preloader-logo-image');

// for( var i = 0; i < images_total_count; i++){
//     images_clone = new Image();
//     images_clone.onload = image_loaded;
//     images_clone.onerror = image_loaded;
//     images_clone.src = images[i].src;
// }

// function image_loaded(){
//     images_loaded_count++;
//     perc_display = (((100/images_total_count)* images_loaded_count) << 0) + '%';
//     console.log(perc_display);
//     logo_height.style.height = perc_display;
//     if(perc_display == '100%'){
//         setTimeout(function(){
//         var preloader_text_top = document.querySelector('.preloader-text-top');
//         if(preloader_text_top.classList.contains('done')){
//             preloader_text_top.classList.remove('done');
//         }
//         }, 1000);
//         setTimeout(function(){
//             var preloader_text_bot = document.querySelector('.preloader-text-bot');
//             if(preloader_text_bot.classList.contains('done')){
//                 preloader_text_bot.classList.remove('done');
//             }
//         }, 2500);
//         setTimeout(function(){
//             var preloader = document.getElementById('page-preloader');
//             if(!preloader.classList.contains('done')){
//                 preloader.classList.add('done');
//             }
//         }, 4000);
//     }
// }
