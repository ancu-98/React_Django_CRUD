import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([]);

  // Get all Books
  useEffect(() => {
    fetchBooks();

  },[]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books');
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder='Book Title...' />
        <input type="number" placeholder='Release Date...' />
        <button>Add Book</button>
      </div>
    </>
  )
}

export default App
