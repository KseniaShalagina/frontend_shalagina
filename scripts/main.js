function showCard(card) {
    const infCards = document.getElementById("information-cards");
    console.log(infCards);
    const newCard = `
    <div class="card">
    <button class="cardbutt" onclick="colors(this)"></button>
    <h2 class="namecard">${card.card_name}</h2>
    <p class="cardtxt">${card.card_text}</p>
    </div>
    `;
    infCards.innerHTML += newCard;
}
function showAllCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        showCard(cards[i]);
    }
}
fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
    .then(response => response.json())
    .then(json => {
    const cards = json.map((comment, index) => ({
        card_name: `Comment ${index + 1}`,
        card_text: comment.body,
    }));
    showAllCards(cards);
});
//# sourceMappingURL=main.js.map