import Favorites from './components/Favorites';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';
import './style/global.css';
import './components/product.css';
import {useState} from 'react';

export default function App() {
  const products = data;
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [exercises, setExercise] = useState(data);

  const onAdd = productToFavorite => {
    const favoriteProduct = products.find(product => product.id === productToFavorite.id);
    setFavoriteItems([...favoriteItems, favoriteProduct]);
  };
  function handleBookmark(id) {
    setExercise(
      exercises.map(exercise => {
        if (exercise.id === id) {
          return {...exercise, bookmarked: !exercise.bookmarked};
        }
        return exercise;
      })
    );
  }
  return (
    <div>
      <Header />

      <Main onAdd={onAdd} products={products} exercises={exercises} onBookmark={handleBookmark} />
      <Favorites onAdd={onAdd} favoriteItems={favoriteItems} />
    </div>
  );
}
