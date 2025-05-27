// component name တွေကို အစအကြီးနဲ့ရေး

import CategorySection from "./components/CategorySection";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductSection from "./components/ProductSection";

export default function App() {
  

  return (
    <> {/* React Fragment */}
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </>
  );
}
