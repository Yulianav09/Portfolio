/* Mobile Menu */
const hamburgerContainer = document.querySelector('#hamburgerContainer');
const nav = document.querySelector('nav');
const navigationLinks = document.querySelector('.navigationLinks');
const hamburgerBar = document.querySelectorAll('.hamburgerBar');
const closebutton = document.querySelector('#closebutton');

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

/* PopUp Window */
const projects = [
  {
    name: 'Proyect 1', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique pariatur iste suscipit nesciunt aut obcaecati numquam?',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['HTML', 'Bootstrap', 'ruby'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  },
  {
    name: 'Proyect 2', 
    description: 'Minima hic cum deserunt nam molestias voluptates molestiae reiciendis quibusdam, dolor dignissimos commodi amet',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['HTML', 'ruby'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  },
  {
    name: 'Proyect 3', 
    description: 'eos rerum excepturi quae incidunt facilis eligendi fugit cumque saepe, laboriosam perspiciatis perferendis! Ad',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  },
  {
    name: 'Proyect 4', 
    description: 'consequuntur dolorem magni totam doloremque natus deleniti minima voluptatum. Libero incidunt autem praesentium delectus',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['React', 'Redux'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  },
  {
    name: 'Proyect 5', 
    description: 'eveniet eos, maiores dolor in totam facilis. Corporis voluptas accusamus nemo maiores unde facere error laborum qui.',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['HTML', 'Bootstrap', 'ruby'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  },
  {
    name: 'Proyect 6', 
    description: 'Minus architecto ad est dignissimos quod, eum omnis, harum, quia voluptatem maiores dolore sequi fugit vel deleniti exercitationem ipsa optio molestiae',
    featureImage: './src/Mask Group img.svg', 
    tecnologies: ['HTML', 'Bootstrap', 'ruby'],
    liveDemo : 'https://yulianav09.github.io/Portfolio/', 
    projectURL : 'https://github.com/Yulianav09/Portfolio'
  }
];
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
}
