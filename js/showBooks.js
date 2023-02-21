import { conectAPI } from "./conectAPI.js";

const list = document.querySelector("[data-list]");

export default function bookCard(image, title, author) {
  const book = document.createElement("li");
  book.className = "books__item";
  book.innerHTML = `
    <div class="book__card">
    <img src="${image}" alt="book image">
    <h3>${title}</h3>
    <p>${author}</p>
    </div>
    `;
  return book;
}

async function bookList() {
  try {
    const listAPI = await conectAPI.booksList();
    listAPI.forEach((element) =>
      list.appendChild(bookCard(element.image, element.title, element.author))
    );
  } catch {
    list.innerHTML = `<h2 class="message">Não foi possível carregar a lista de livros.</h2>`;
  }
}

bookList();
