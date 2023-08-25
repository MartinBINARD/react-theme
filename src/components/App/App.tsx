import logoGray from '../../assets/logo-gray.png';
import logoGreen from '../../assets/logo-green.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>O&apos;day</h1>

        <img src={logoGray} alt="O'clock" />
      </header>

      <main>
        <button type="button">Switch to dark mode</button>
      </main>
    </div>
  );
}

export default App;
