import './App.css';
import Header from './Components/Header';
import CategorySection from './Components/CategorySection';
import Footer from './Components/Footer';
import Instagram from './instagram.svg';

const artImages = [
  process.env.PUBLIC_URL + '/hmmm_acrylic_on_canvas.jpg',
  process.env.PUBLIC_URL + '/prada_sunglasses_acrylic_on_canvas.jpg',
  process.env.PUBLIC_URL + '/yippee_acrylic_on_canvas.jpg'
]

const cookingImages = [
  process.env.PUBLIC_URL + 'making_pasta.jpg',
  process.env.PUBLIC_URL + 'making_pizza.jpg',
  process.env.PUBLIC_URL + 'culinary_school.jpg'
]

const designImages = [
  process.env.PUBLIC_URL + 'ahhh.jpg',
  process.env.PUBLIC_URL + 'caecus.jpg',
  process.env.PUBLIC_URL + 'sexy_coyote.jpg'
]

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/coop_mueller/',
    svg: Instagram
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="category-sections">
        <CategorySection title='Art' images={artImages} offset={1500}/>
        <CategorySection title='Cooking' images={cookingImages} offset={0}/>
        <CategorySection title='Design' images={designImages} offset={750}/>  
      </div>
      <Footer socialLinks={socialLinks}/>
    </div>
  );
}

export default App;
