const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById("toast"));
const toastText = document.getElementById("toast-text");

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    toastText.textContent = button.dataset.toast;
    toast.show();
  });
});

const productModal = document.getElementById("productModal");

productModal?.addEventListener("show.bs.modal", ({ relatedTarget }) => {
  const card = relatedTarget.closest(".card");
  const image = card.querySelector("img");

  document.getElementById("productModalTitle").textContent = card.querySelector(".card-title").textContent;
  document.getElementById("productModalImage").src = image.src;
  document.getElementById("productModalImage").alt = image.alt;
  document.getElementById("productModalDescription").textContent = card.dataset.description;
  document.getElementById("productModalPrice").textContent = card.querySelector(".card-text").textContent;
});

const orderModal = document.getElementById("orderModal");
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  orderForm.classList.add("was-validated");

  if (orderForm.reportValidity()) {
    orderForm.hidden = true;
    orderSuccess.hidden = false;
  }
});

orderModal?.addEventListener("hidden.bs.modal", () => {
  orderForm.reset();
  orderForm.classList.remove("was-validated");
  orderForm.hidden = false;
  orderSuccess.hidden = true;
});
