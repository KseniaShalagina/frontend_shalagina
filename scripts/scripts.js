const cards = {
  card_1: {
    card_name: "Professional Profile",
    card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
  },
  card_2: {
    card_name: "Best Portfolio",
    card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
  },
  card_3: {
    card_name: "Powerful Resume",
    card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
  },
}
function showCard(card) {
  let infCards = document.getElementById("information-cards");
  console.log(infCards);
  let newCard = `
  <div class="card">
  <button class="cardbutt" onclick="colors(this)"></button>
  <h2 class="namecard">${card.card_name}</h2>
  <p class="cardtxt">${card.card_text}</p>
  </div>
  `;
  infCards.innerHTML += newCard;
}
function showAllCards(cards) {
  const cardArray = Object.values(cards); // Преобразуем объект в массив значений
  for (let i = 0; i < cardArray.length; i++) {
    showCard(cardArray[i]);
  }
}
showAllCards(cards);
//кнопки
let a;
function colors(el) {
  const t = "that"
  if (a && a != el) a.classList.remove(t)

  if (!el.className.includes(t)) el.classList.add(t)
  else el.classList.remove(t)

  a = el
}
const swiper = new Swiper('.swiper',
  {
    loop: true,
    autoplay: {     //add
      delay: 0,   //add
    },
    speed: 3000,          //add
    slidesPerView: 1,
  }

);

//Форма регистрации
function closeBackdrop(el, ev) {
  if (el == ev.target) el.classList.add("off1")
  document.documentElement.style.overflow = "auto"
}
function openBackdrop() {
  document.getElementsByClassName("backdrop")[0].classList.remove("off1");
  document.documentElement.style.overflow = "hidden"
}
//Пролоадер
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
      const spinner = document.querySelector('.spinner');
      
      preloader.style.opacity = '0';
      
      preloader.addEventListener('transitionend', () => {
          preloader.style.display = 'none';
          document.body.classList.add('content-loaded');
      });
      
      spinner.innerHTML = '';
  }, 2000);
});


