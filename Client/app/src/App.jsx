import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState('')
  const [autor, setAutor] = useState('')
  const [releaseYear, setReleaseYear] = useState('')

  const [newTitle, setNewTitle] = useState('')
  const [newAutor, setNewAutor] = useState('')

  // Get all Books
  useEffect(() => {
    fetchBooks();

  },[]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/');
      const data = await response.json();
      setBooks(data)
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  }

  const addBook = async () => {
    if(!title || !autor || !releaseYear){
      alert('Por favor completa todos los campos');
      return;
    }
    const bookData = {
      title,
      autor,
      release_year : releaseYear
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/create/',{
        method : "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json()
      console.log(data)
      setBooks((prev) => [...prev, data])

      // Se limpian los inputs después de agregar.
      setTitle('');
      setAutor('');
      setReleaseYear('');
    } catch (err) {
      console.log(err)
    }
  }

  const updateTitle = async (pk, autor, release_year) => {
    const bookData = {
      title : newTitle,
      autor,
      release_year
    }
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`,{
        method : "PUT",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      console.log(data);
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id == pk){
            return data;
          }else {
            return book;
          }
        })
      );
    } catch (err) {
      console.log(err)
    }
  }

  const updateAutor = async (pk, title, release_year) => {
    const bookData = {
      title,
      autor: newAutor,
      release_year
    }
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`,{
        method : "PUT",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      console.log(data);
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id == pk){
            return data;
          }else {
            return book;
          }
        })
      );
    } catch (err) {
      console.log(err)
    }
  }

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`,{
          method : "DELETE",
        });
        setBooks((prev) => prev.filter((book) => book.id !== pk))
        const data = await response.json();
        console.log(data);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Books Website</h1>
      <div className='create-book-form'>
        <input
          type="text"
          placeholder='Book Title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder='Autor...'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <input
          type="number"
          placeholder='Release Date...'
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul className='books-container'>
        {books.map((book) => (
          <li key={book.id} className='book-item'>
            <div className='book-info'>
              <strong>Title: {book.title}</strong>
              <p>Autor:{book.autor}</p>
              <p>Release Year: {book.release_year}</p>
            </div>
            <div className='book-actions'>
              <input
                type="text"
                placeholder='New Title...'
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button className='title-button' onClick={() => updateTitle(book.id, book.autor, book.release_year)} >Change Title</button>
              <input
                type="text"
                placeholder='New Autor...'
                onChange={(e) => setNewAutor(e.target.value)}
              />
              <button className='autor-button' onClick={() => updateAutor(book.id, book.title ,book.release_year)} >Change Autor</button>
              <button className='delete-button' onClick={() => deleteBook(book.id)}> Delete Book </button>

            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
