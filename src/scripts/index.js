import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import data from "../DATA.json";

const menu_hamburger = document.querySelector(".menu_hamburger");
const nav = document.querySelector("nav");
menu_hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const items_container = document.querySelector(".items_container");

data.restaurants.forEach((restaurant) => {
  const description =
    restaurant.description.slice(0, 350) +
    (restaurant.description.length > 350 ? "..." : "");
  items_container.innerHTML += ` 
    <a href="#" class="item">
        <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="text_item">
        <h4>
           ${restaurant.name}
            <span class="rating">
            <ion-icon name="star"></ion-icon>
            <span>${restaurant.rating}</span>
            </span>
        </h4>
        <p class="location">
            <ion-icon name="location"></ion-icon>
            <span>${restaurant.city}</span>
        </p>
        <p class="deskripsi">
           ${description}
        </p>
        </div>
    </a>`;
});
