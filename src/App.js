import { AuthType, init } from "@thoughtspot/visual-embed-sdk";
import './App.css';
import { Search } from "./Search";
import { EmbedLiveboard } from "./tse";

init({
  thoughtSpotHost: 'https://team2.thoughtspot.cloud/',
  authType: AuthType.None
});

function App() {
  return (
    <div className="App">
       <Search/>
      <EmbedLiveboard/>
      
    </div>
  );
}

export default App;
