import { conectAPI } from "./conectAPI.js";

const form = document.querySelector("[data-form]");

async function addBook(event) {
  event.preventDefault();

  const title = document.querySelector("[data-title]").value;
  const author = document.querySelector("[data-author]").value;
  const image = document.querySelector("[data-url]").value;

  try {
    await conectAPI.registerBook(title, author, image);
    window.location.href = "../pages/bookSent.html";
  } catch (e) {
    alert(e);
  }
}

form.addEventListener("submit", (event) => addBook(event));
