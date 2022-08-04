import Favorites from './components/Favorites';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';
import './style/global.css';
import './components/product.css';
import {useState} from 'react';
import {DropDown} from './components/DropDown';

export default function App() {
  const [products, setProducts] = useState(data);
  const favoriteItems = products.filter(product => product.bookmarked === true);

  const handleBookmark = id => {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          return {...product, bookmarked: !product.bookmarked};
        } else {
          return product;
        }
      })
    );
  };

  return (
    <div>
      <Header />
      <DropDown />
      <Main products={products} onBookmark={handleBookmark} />
      <Favorites onBookmark={handleBookmark} favoriteItems={favoriteItems} />
    </div>
  );
}
