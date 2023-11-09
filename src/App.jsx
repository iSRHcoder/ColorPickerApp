import "./App.css";
import AppFooter from "./Components/AppFooter/AppFooter";
import AppHeader from "./Components/AppHeader/AppHeader";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
};

export default App;
