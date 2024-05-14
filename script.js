// Kelompok JS

const kelompokRoot = document.getElementById("kelompokRoot");

const datas = [
  {
    nama: "Riqza Harly Saputra",
    NPM: "237006055",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006055.jpg",
  },
  {
    nama: "Diva Marshelano Ardentinnova S",
    NPM: "237006041",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006041.jpg",
  },
  {
    nama: "Widia Senja Rahayu",
    NPM: "237006024",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006024.jpg",
  },
  {
    nama: "Mohammad Daffa Pradiva Untara",
    NPM: "237006061",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006061.jpg",
  },
  {
    nama: "Bakti Dwi Pamungkas",
    NPM: "237006049",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006059.jpg",
  },
];

const createCard = (data) => {
  return `
  <div class="card w-64 h-[60vh] bg-base-100 shadow-xl">
  <figure><img class="object-center" src=${data.foto} alt=${data.nama} /></figure>
  <div class="card-body h-40 flex flex-col items-center justify-around">
    <h2 class="card-title text-base text-center">${data.nama}</h2>
    <p class="text-center">${data.NPM}</p>
  </div>
  `;
};


window.onload = () => {
    datas.forEach((data) => {
      kelompokRoot.innerHTML += createCard(data);
    });
}

// Kelompok JS


//Materi JS

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideContainer = document.getElementById('slideContainer');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlides();
});

function showSlides() {
  const slides = slideContainer.getElementsByClassName('cardMateri');
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  slideContainer.style.transform = `translateX(-${slideIndex * (slides[0].offsetWidth + 20)}px)`;
}

//Materi JS



