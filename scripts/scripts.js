'use strict';
const cards={
    card_1:{
        card_name: "Professional Profile",
        card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
    },
    card_2:{
        card_name: "Best Portfolio",
        card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
    },
    card_3:{
        card_name: "Powerful Resume",
        card_text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and getdiscovered by recruiter",
    },
}
function get_cards(cards){
    return Object.values(cards);
}
function inserting_cards(card){
    return `
     <div class="card">
        <button class="cardbutt"></button>
        <h2 class="namecard">${card.card_name}</h2>
        <p class="cardtxt">${card.card_text}</p>
    </div>
    `;
}
// Функция для рендеринга карточек
function renderCards(containerSelector, cardsData) {
    const container = document.querySelector(containerSelector);
  
    if (!container) {
      console.error("Container not found!");
      return;
    }
  
    // Очищаем контейнер перед добавлением новых карточек
    container.innerHTML = "";
  
    // Создаем HTML для каждой карточки и добавляем в контейнер
    cardsData.forEach((card) => {
      const cardHTML = createCardTemplate(card);
      container.insertAdjacentHTML("beforeend", cardHTML);
    });
  }
  
  // Инициализация после загрузки DOM
  document.addEventListener("DOMContentLoaded", () => {
    const cardsData = getCardsData(cards);
    renderCards(".cards", cardsData);
  });



