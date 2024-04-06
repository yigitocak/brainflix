import './App.css';
import './styles/partials/global.scss'
import nextVideos from "./data/videos.json"
import videosData from "./data/video-details.json"

import Header from "./components/Header/Header";
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="App">
      <Header />
      <Main videosData={videosData} nextVideos={nextVideos}/>
    </div>
  );
}

export default App;
