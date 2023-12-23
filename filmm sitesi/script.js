document.addEventListener("DOMContentLoaded", function () {
    const arrows = document.querySelectorAll(".arrow");
    const movieLists = document.querySelectorAll(".movie-list");
  
    arrows.forEach((arrow, i) => {
      const widthRatio = Math.floor(window.innerWidth / 300);
  
      let clickCounter = 0;
      arrow.addEventListener("click", function () {
        // Kontrol et: movieLists[i] tanımlı ve bir DOM öğesi.
        if (movieLists[i] && movieLists[i].nodeType === 1) {
          const images = movieLists[i].querySelectorAll("img");
          const imageCount = images.length;
  
          if (imageCount - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            clickCounter++;
            const currentTransformX = parseFloat(
              getComputedStyle(movieLists[i]).transform.split(",")[4]
            );
            movieLists[i].style.transform = `translateX(${
              currentTransformX - 300
            }px)`;
            
      // Başa sarma kontrolü
      if (imageCount - (4 + clickCounter) + (4 - widthRatio) < 0) {
        movieLists[i].style.transition = "none";
        movieLists[i].style.transform = `translateX(0)`;
        setTimeout(() => {
          movieLists[i].style.transition = "transform 0.5s ease-in-out";
        }, 50);
        clickCounter = 0; // Reset clickCounter
      }
    } else {
      // Resimler bittiğinde başa sarma
      movieLists[i].style.transition = "none";
      movieLists[i].style.transform = `translateX(0)`;
      setTimeout(() => {
        movieLists[i].style.transition = "transform 0.5s ease-in-out";
      }, 50);
      clickCounter = 0; // Reset clickCounter
    }
        } else {
          console.error(`movieLists[${i}] is not a valid DOM element.`);
        }
      });
    });
  });

  
  /* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball, .movie-list-filter select, .movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});

