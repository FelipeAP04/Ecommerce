import Header from "../components/Header";
import DiscountSlider from "../components/DiscountSlider";
import Categories from "../components/Categories";

function HomePage() {
  return (
    <div>
      <Header />
      <main style={{ padding: 24 }}>
        <h2>Productos en descuento</h2>
        <DiscountSlider />
        <div style={{ height: 32 }} /> {/* Spacer */}
        <Categories />
      </main>
    </div>
  );
}
export default HomePage;
