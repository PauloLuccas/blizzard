"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{sliderPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games");allFilters.forEach(function(t,a){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[a].classList.add("active"),t.classList.add("active")})});var btnOpenModal=document.querySelector(".js-open-modal"),btnCloseModal=document.querySelector(".js-close");btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")});