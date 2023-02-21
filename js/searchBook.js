import { conectAPI } from "./conectAPI.js";
import bookCard from "./showBooks.js";

async function searchBook(event) {
  event.preventDefault();

  const dataSearch = document.querySelector("[data-search]").value;
  const search = await conectAPI.searchBookAPI(dataSearch);

  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((element) =>
    list.appendChild(bookCard(element.image, element.title, element.author))
  );

  if (search.length == 0) {
    list.innerHTML = `<h2 class="message">Não existem livros com este termo.</h2>`;
  }
}

const btnSearch = document.querySelector("[data-btn-search]");

btnSearch.addEventListener("click", (event) => searchBook(event));
