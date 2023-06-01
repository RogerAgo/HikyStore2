const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove(active)
//     navMenu.classList.remove(active)
// }))

const searchButton = document.querySelector('.search');
const closeButton = document.querySelector('.close');
const searchInput = document.querySelector('input[name="query"]');
const panier = document.querySelector('.panier');

searchButton.addEventListener('click', () => {
  searchInput.style.display = 'block';
  searchButton.style.display = 'none';
  closeButton.style.display = 'block';
  panier.style.display = 'none';
  closeButton.style.marginRight = '10px';
  searchInput.style.marginRight = '10px';
});

closeButton.addEventListener('click', () => {
  searchInput.style.display = 'none';
  searchButton.style.display = 'block';
  closeButton.style.display = 'none';
  panier.style.display = 'block'; 
  closeButton.style.marginRight = '10px';
  searchInput.style.marginRight = '10px';
});




