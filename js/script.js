'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Delete advertising

const advert = document.querySelectorAll(".promo__adv img");
const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
const movieList = document.querySelector(".promo__interactive-list");
// const movieItem = movieList.querySelectorAll(".promo__interactive-item");

advert.forEach(item =>{
    item.remove();
});

// Change genre and background
genre.textContent = "драма";
poster.style.backgroundImage = `url("img/bg.jpg")`;


// List of movie  and sort

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});