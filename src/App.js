import Favorites from './components/Favorites';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';
import {useState} from 'react';

export default function App() {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState('');
  const [sortLowToHigh, setSortLowToHigh] = useState(true);

  const favoriteItems = products.filter(product => product.bookmarked === true);

  function handleFilter(stringToFilter) {
    setFilter(stringToFilter);
    const FilteredProducts = products.filter(productItem => productItem.category === stringToFilter);
    setProducts(FilteredProducts);
  }

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

  const handleSortChange = () => {
    setSortLowToHigh(sortLowToHigh => !sortLowToHigh);
  };

  return (
    <div>
      <Header />

      <Main
        products={products.sort((a, b) => {
          if (sortLowToHigh) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        })}
        sortLowToHigh={sortLowToHigh}
        onSortChange={handleSortChange}
        onBookmark={handleBookmark}
        onFilter={handleFilter}
        filter={filter}
        // sortProducts={sortProducts}
        // sortedProducts={sorted}
      />
      <Favorites onBookmark={handleBookmark} favoriteItems={favoriteItems} />
    </div>
  );
}
