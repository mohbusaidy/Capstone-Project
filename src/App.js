import Favorites from './components/Favorites';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';
import global from './style/global.css';
import product from './components/product.css';
import {useState} from 'react';

export default function App() {
  const products = data;
  const [favoriteItems, setFavoriteItems] = useState([]);
  const onAdd = product => {
    const exist = favoriteItems.find(x => x.id === product.id);
    if (exist) {
      setFavoriteItems(favoriteItems.map(x => (x.id === product.id ? {...exist, qty: exist.qty + 1} : x)));
    } else {
      setFavoriteItems([...favoriteItems, {...product, qty: 1}]);
    }
  };

  return (
    <div>
      <Header />
      <Main onAdd={onAdd} products={products} />
      <Favorites onAdd={onAdd} favoriteItems={favoriteItems} />
    </div>
  );
}
