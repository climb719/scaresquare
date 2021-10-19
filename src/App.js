//import logo from './logo.svg';q
import './App.css';
import HorrorList from './containers/HorrorList'


function App() {
  return (
    <main>
    <div>
      <header>
      <h1> Welcome to SCARESQUARE </h1>  
      <h3>Get Scared, Vote Here:</h3>
      </header>
        <HorrorList />
        <p id="warning"><strong >Warning: </strong>Search for a title before adding it below. If YOU cause duplicate entries, destruction will follow...</p>
    </div>
    </main>
  );
}

export default App;
