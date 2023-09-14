import { useEffect, useState } from 'react';
import api from './utils/api';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main  } from './components/Main';
import Photo from './components/Photo';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      api.search(searchQuery).then(({ results }) => {
        const array = results.map((item) => {
          return ({
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.description,
            subtitle: item.user.name,
          })
        })

        setCards(array);
      }).finally(() => {
        setIsSubmitted(false)
      })
    }
  }, [isSubmitted]) // массив зависимостей

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  };

  const handleAction = (data) => {
    // console.log(data)
  }

  const handleOnSubmit = (data) => {

    api.search(searchQuery).then(({ results }) => {
      const array = results.map((item) => {
        return ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        })
      })

      setCards(array);
    }).finally(() => {
      setIsSubmitted(false)
    })
  }

  return (
    <Routes>
      <Route path='/hello' element={<div>hello world!</div>} />
      <Route path='/photos/:id' element={<Photo photos={cards} />} />
      <Route path='/' element={<Main onSubmit={handleOnSubmit} onAction={handleAction} cards={cards} handleSubmit={handleSubmit} handleChange={handleChange} isSubmitted={isSubmitted} searchQuery={searchQuery} />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
