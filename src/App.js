//import logo from './logo.svg';
import './App.css';
import HorrorList from './containers/HorrorList'
import HorrorForm from './components/HorrorForm';

function App() {
  return (
    <main>
    <div>
      <header>
      <h1> Welcome to Scaresquare </h1>  
      <h4>Get scared, vote here:</h4>
      </header>
   
        <HorrorForm />
        <HorrorList />
    </div>
    </main>
  );
}

export default App;
