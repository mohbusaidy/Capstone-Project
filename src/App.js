import Favorites from './components/Favorites';
import Header from './components/Header';
import header from './components/header.css';
import data from './data';
import Main from './components/Main';
import global from './style/global.css';
import main from './components/main.css';
import product from './components/product.css';

export default function App() {
  const products = data;
  return (
    <div>
      <Header />
      <Main products={products} />
      <Favorites />
    </div>
  );
}
