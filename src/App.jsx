import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Comics from "./components/Comics";
import { Route, Routes} from 'react-router-dom';
import "./components/character.css";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/browse" element={<CharacterList />} />
        <Route path="/character-details" element={<CharacterDetail />} />
        <Route path="/character-details/:id" element={<CharacterDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    
  )
}

export default App
