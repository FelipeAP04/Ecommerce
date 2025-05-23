import './App.css';
import Header from './components/Header';
import DiscountSlider from './components/DiscountSlider';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '24px' }}>
        <h2>Productos en descuento</h2>
        <DiscountSlider />
        <Categories />
      </main>
    </div>
  );
}

export default App;
