'use strict';

document.addEventListener("DOMContentLoaded", () => { 

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
const addForm = document.querySelector("form.add");
const addInput = addForm.querySelector(".adding__input");
const checkboxForm = addForm.querySelector("[type='checkbox']");


// Add new movie
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newFilm = addInput.value;
    const favorite = checkboxForm.checked;

    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovie(movieDB.movies, movieList);

    e.target.reset();

});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

// Change genre and background

const makeChanges = () => {
    genre.textContent = "драма";
    poster.style.backgroundImage = "url('img/bg.jpg')";
};

// List of movie  and sort
const sortArr = (arr) => {
    arr.sort();
};

function createMovie(films,parent){
    parent.innerHTML = "";

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
}

deleteAdv(advert);
makeChanges();
sortArr(movieDB.movies);
createMovie(movieDB.movies, movieList);

});