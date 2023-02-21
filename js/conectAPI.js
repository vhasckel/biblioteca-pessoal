async function booksList() {
  const access = await fetch("http://localhost:3000/livros");
  const convertAccess = await access.json();

  return convertAccess;
}

async function registerBook(title, author, image) {
  const access = await fetch("http://localhost:3000/livros", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      author: author,
      image: image,
    }),
  });
  
  if (!access.ok) {
    throw new Error("Não foi possível cadastrar o livro.");
  }
  const convertAccess = await access.json();
  return convertAccess;
}

async function searchBookAPI(searchTerm) {
  const access = await fetch(`http://localhost:3000/livros?q=${searchTerm}`);
  const convertAccess = access.json();

  return convertAccess;
}

export const conectAPI = {
  booksList,
  registerBook,
  searchBookAPI,
};
