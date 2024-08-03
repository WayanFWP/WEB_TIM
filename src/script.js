// // Navbar
// window.onscroll = function () {
//   const header = document.querySelector('header');
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add('navbar-fixed');
//     header.classList.add('absolute');
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// // Responsive_navbar
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector(".relative");

// hamburger.addEventListener("click", () => {
//   hamburger.toggle("hamburger-active");
//   //navMenu.classList.toggle("hidden");
// });


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('translate-x-full');
  });
  document.getElementById('menu-close').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('translate-x-full');
  });

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });