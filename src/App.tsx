
import ImageGallery from './ImageGallery';
import './App.css';
import img1 from '../public/imgs/pexels-thatguycraig000-1563355.jpg';
import img2 from '../public/imgs/pexels-eberhardgross-443446.jpg';
import img3 from '../public/imgs/pexels-eberhardgross-1624496.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Gallery</h1>
        <ImageGallery images={[img1, img2, img3]} />
      </header>
    </div>
  );
}

export default App;
