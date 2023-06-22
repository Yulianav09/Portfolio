const hamburgerContainer = document.querySelector('#hamburgerContainer');
const nav = document.querySelector('nav');
const navigationLinks = document.querySelector('.navigationLinks');
const hamburgerBar = document.querySelectorAll('.hamburgerBar');
const closebutton = document.querySelector('#closebutton');
const open = document.querySelector('.open');
const modalContainer = document.querySelector('.modalContainer');
const closex = document.querySelector('.closex');
const cardsContainer = document.querySelector('#cardsContainer');
const modalTecnologies = document.querySelector('#modalTecnologies');
const modalDescription = document.querySelector('#modalDescription');
const liveDemo = document.querySelector('#liveDemo');
const source = document.querySelector('#source');
const modaltitle = document.querySelector('.modaltitle');
const snapshoot = document.querySelector('#snapshoot');

for (let i = 0; i < projects.length; i += 1) {
  console.log(i);
  const projectCard = document.createElement('article');
  projectCard.classList.add('projectCard');

  const cardIMG = document.createElement('div');
  cardIMG.classList.add('cardIMG');
  cardIMG.innerHTML = `<img src="${projects[i].featureImage}" alt="Project 2">`;

  const cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');
  cardContent.innerHTML = `
  <h3 class="cardTitle textWhite">${projects[i].name}</h3>
  <p class="cardDescription textWhite">${projects[i].description}
  </p>
  <ul class="boxes">
  ${projects[i].tecnologies.map((element) => `<li class="textWhite">${element}</li>`).join('')}
  </ul>
  <button id="projectButton${i}" class="projectButton open">See project</button>
  `;

  
  projectCard.appendChild(cardIMG);
  projectCard.appendChild(cardContent);
  cardsContainer.appendChild(projectCard);
  const boton = document.querySelector(`#projectButton${i}`)

  boton.addEventListener('click', () => {
    modalContainer.classList.add('show');
    modaltitle.textContent = projects[i].name
    modalDescription.textContent = projects[i].description
    modalTecnologies.innerHTML = `${projects[i].tecnologies.map((element) => `<li>${element}</li>`).join('')}`
    liveDemo.href = projects[i].liveDemo
    source.href = projects[i].projectURL
    snapshoot.src = projects[i].featureImage
  });
}
hamburgerContainer.addEventListener('click', () => {
  if (navigationLinks.classList.contains('onlyDesktop')) {
    navigationLinks.classList.remove('onlyDesktop');
    nav.classList.add('navMobile');
    for (let i = 0; i < hamburgerBar.length; i += 1) {
      hamburgerBar[i].classList.add('hidden');
    }
    closebutton.classList.remove('hidden');
  } else {
    nav.classList.remove('navMobile');
    navigationLinks.classList.add('onlyDesktop');
    for (let i = 0; i < hamburgerBar.length; i += 1) {
      hamburgerBar[i].classList.remove('hidden');
    }
    closebutton.classList.add('hidden');
  }
});

function closewindow() {
  nav.classList.remove('navMobile');
  navigationLinks.classList.add('onlyDesktop');
  for (let i = 0; i < hamburgerBar.length; i += 1) {
    hamburgerBar[i].classList.remove('hidden');
  }
  closebutton.classList.add('hidden');
}

navigationLinks.addEventListener('click', closewindow);

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
    modaltitle.textContent = 'Multi-Post Stories'
    modalDescription.textContent = `A daily selection of privately personalized reads; no accounts or sign-ups required.
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`
    modalTecnologies.innerHTML = `<li>CSS</li>
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby</li>`
    liveDemo.href = 'https://yulianav09.github.io/Portfolio/'
    source.href = 'https://github.com/Yulianav09/Portfolio'
    snapshoot.src = './src/Img Placeholder works.png'
  });

closex.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

//validation email

const form = document.getElementById("form");
const email = document.getElementById("email");
const formControl = document.querySelector(".formControl");

function checkInputs() {
const emailValue = email.value.trim();
console.log(emailValue == emailValue.toLowercase);
if (emailValue !== emailValue.toLowerCase()) {
  formControl.classList.add('error')
} else{
  formControl.classList.remove('error')
}

}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkInputs();
});