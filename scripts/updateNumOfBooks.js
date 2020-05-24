function updateNumOfBooks(authors, books) {
  let x = 0;
  for (let i = 0; i < authors.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (books[j].authorid == authors[i].id) {
        authors[i].numberOfBooks += 1;
      }
      console.log(`${authors[i].name} ${authors[i].lastName} has ${x} books`);
      x = 0;
    }
  }
}

