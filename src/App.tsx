import ImageGallery from './ImageGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageGallery
          images={[
            '/imgs/pexels-thatguycraig000-1563355.jpg',
            '/imgs/pexels-eberhardgross-443446.jpg',
            '/imgs/pexels-eberhardgross-1624496.jpg',
          ]}
        />
      </header>
    </div>
  );
}

export default App;
