import ImageGallery from './ImageGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Gallery</h1>
        <ImageGallery
          images={[
            `${process.env.PUBLIC_URL}/imgs/pexels-thatguycraig000-1563355.jpg`,
            `${process.env.PUBLIC_URL}/imgs/pexels-eberhardgross-443446.jpg`,
            `${process.env.PUBLIC_URL}/imgs/pexels-eberhardgross-1624496.jpg`,
          ]}
        />
      </header>
    </div>
  );
}

export default App;
