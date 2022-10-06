const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const close = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
// show modal
function showBuyTickets() {
  modal.classList.add("open");
}
// hiden modal
function hideBuyTickets() {
  modal.classList.remove("open");
}
// event click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

close.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
