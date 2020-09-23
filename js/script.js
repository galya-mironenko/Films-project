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
    let newFilm = addInput.value.toUpperCase();
    const favorite = checkboxForm.checked;

    if(newFilm){

        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if(favorite){
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovie(movieDB.movies, movieList);
    }

    e.target.reset();
});

// Delete advertising

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

    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });

    // Delete Movie

    document.querySelectorAll(".delete").forEach((btn,i) => {
        btn.addEventListener("click", () =>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovie(films, parent);
        });
    });
}

deleteAdv(advert);
makeChanges();
createMovie(movieDB.movies, movieList);

});