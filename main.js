import './style.scss';
import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints.min.js';

// type js
let options = {
    strings: ['<i>Food...</i>', '<i>Drink...</i>'],
    typeSpeed: 60,
    backSpeed: 50,
    loop:true,
    backDelay:1000
};
let typed = new Typed('.element', options);

// scrollreveal js 
let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 500,
    duration:800,
    // easing: 'ease-in',
    // easing: 'steps(2)'
};
ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '80px',
    origin: 'left',
    interval: 500,
    duration:800
};
ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 500,
    duration:800
};
ScrollReveal().reveal('.to-left', toLeft);

// waypoints js 
new Waypoint({
    element: document.getElementById('home-acive'),
    handler: function(direction) {
        let oldActive =document.querySelector('.nav-link.active');
        if (oldActive != null){
            oldActive.classList.remove('active');
            }
        let currentActive =document.querySelector('[href="#home"]');
        currentActive.classList.add('active');
    },
    offset: '10%'
  });


//   let sections = ['about','services','menu'];
//   sections.forEach(function (section){
//     new Waypoint({
//         element: document.getElementById(section),
//         handler: function(direction) {
//             let oldActive = document.querySelector(".nav-link.active");
//             oldActive.classList.remove("active");
//             let currentActive =document.querySelector('[href="#${section}"]');
//             currentActive.classList.add("active");
//         },
//         offset: '50%'
//       })
//   });
new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let oldActive = document.querySelector(".nav-link.active");
        oldActive.classList.remove("active");
        let currentActive =document.querySelector('[href="#about"]');
        currentActive.classList.add("active");
    },
    offset: '50%'
  });
  new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
        let oldActive = document.querySelector(".nav-link.active");
        oldActive.classList.remove("active");
        let currentActive =document.querySelector('[href="#services"]');
        currentActive.classList.add("active");
    },
    offset: '50%'
  });
  new Waypoint({
    element: document.getElementById('menu'),
    handler: function(direction) {
        let oldActive = document.querySelector(".nav-link.active");
        oldActive.classList.remove("active");
        let currentActive =document.querySelector('[href="#menu"]');
        currentActive.classList.add("active");
    },
    offset: '50%'
  });
  new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldActive = document.querySelector(".nav-link.active");
        oldActive.classList.remove("active");
        let currentActive =document.querySelector('[href="#contact"]');
        currentActive.classList.add("active");
    },
    offset: '50%'
  });


//   let menuLists =[
//     {
//         id :1,
//         title :"Barbecue Salad",
//         img : "public/img/plate1.png",
//         descruption:"Special Delecius Dish",
//         price: 50,
//         currency : "$",
//     },
//     {
//         id :2,
//         title :"Salad With Fish",
//         img : "public/img/plate2.png",
//         descruption:"Special Delecius Dish",
//         price: 22.2,
//         currency : "$",
//     },
//     {
//         id :3,
//         title :"Spinach Salad",
//         img : "public/img/plate3.png",
//         descruption:"Special Delecius Dish",
//         price: 30.4,
//         currency : "$",
//     }
//   ];
//   let menuRow =document.getElementById("menuRow");
//   menuLists.forEach(function (menuList){
//     let div = document.createElement('div');
//     div.classList.add();
//     div.innerHTML =  
//          <div class="card plate-card">
//           <img src="./public/img/plate3.png" class=" w-75 mx-auto mt-3 d-block " alt="">
//           <div class=" card-body">
//             <p class="fw-bold">Spinach Salad</p>
//             <p class=" text-black-50"> Special Delecius Dish</p>
//             <div class=" d-flex justify-content-between align-items-center">
//               <p class=" mb-0">$ 30.4</p>
//               <button class=" btn btn-primary">
//                 <i class=" bi bi-cart-plus text-white"></i>
//               </button>
//             </div>
//           </div>
//         </div>
        
    
//   });



