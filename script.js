const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const bookTable = document.getElementById('bookTable');

let books = [];

bookForm.addEventListener('submit', addBook);

function addBook(event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  if (title === '' || author === '') {
    alert('Please enter both title and author.');
    return;
  }

  const book = { title, author };
  books.push(book);

  displayBooks();
  clearForm();
}

function displayBooks() {
  bookTable.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  `;

  books.forEach((book, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
      </td>
    `;

    bookTable.appendChild(row);
  });
}

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
}

function editBook(index) {
  const book = books[index];
  const newTitle = prompt('Enter new title:', book.title);
  const newAuthor = prompt('Enter new author:', book.author);

  if (newTitle === null || newAuthor === null) {
    return;
  }

  if (newTitle === '' || newAuthor === '') {
    alert('Please enter both title and author.');
    return;
  }

  book.title = newTitle;
  book.author = newAuthor;

  displayBooks();
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

displayBooks();

  
