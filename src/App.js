import Favorites from './components/Favorites';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';
import {useEffect, useState} from 'react';

export default function App() {
  const [sortProducts, setSortProducts] = useState('');
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState(data);
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
  const handlePriceOption = item => {
    setSortProducts(item);
  };
  useEffect(() => {
    if (sortProducts === 'Low to high') {
      const lth = products.price((a, b) => a - b);
      setSortProducts(lth);
    }
    if (sortProducts === 'High to low') {
      const htl = products.price((a, b) => a - b).reverse();
      setSortProducts(htl);
    }
  });

  return (
    <div>
      <Header />

      <Main
        products={products}
        onBookmark={handleBookmark}
        onFilter={handleFilter}
        filter={filter}
        sortProducts={sortProducts}
        handlePriceOption={handlePriceOption}
      />
      <Favorites onBookmark={handleBookmark} favoriteItems={favoriteItems} />
    </div>
  );
}
