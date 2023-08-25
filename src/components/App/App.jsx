import React from 'react';

import Button from './Button';

import logoGray from '../../assets/logo-gray.png';
import logoGreen from '../../assets/logo-green.png';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Création du state
    // c'est OBLIGATOIREMENT un objet
    this.state = {
      isDark: false,
      // pour chaque « variable d'état », j'ajoute une propriété
      // likes: 0,
      count: 0,
    };

    // On va créer une méthode pour appeler `switchMode`
    // tout en transportant /lui donnant la classe comme contexte
    // > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    // this.switchMode = this.switchMode.bind(this);
  }

  // Je cible le montage de mon composant
  // pour effectuer des tâches
  // - DOM réel
  // - appel API
  // - setTimeout
  // - abonnement à des services (chat…)
  componentDidMount() {
    /*
      cette méthode est AUTOMATIQUEMENT appelée
      lors du 1er rendu
      → `useEffect(effect, [])`
    */
    console.log('Mounted!');
    document.title = 'Welcome!'; // exemple
  }

  // Je cible la mise à jour de mon composant
  componentDidUpdate() {
    /*
      cette méthode est AUTOMATIQUEMENT appelée
      après une modification/mise à jour
      → `useEffect(effect)`
      → `useEffect(effect, [prop, state])`

      les mises à jour sont provoquée par :
      - mise à jour d'une prop
      - `setState()`
      - forçage (`forceUpdate()`)
    */
    console.log('Updated!');

    const { isDark } = this.state;
    document.title = `Mode: ${isDark ? 'dark' : 'light'}`; // exemple
  }

  // Je cible le démontage de mon composant
  componentWillUnmount() {
    /*
      cette méthode est AUTOMATIQUEMENT appelée
      juste avant la suppression de mon composant
      → clean-up de `useEffect` ; fonction retournée par le callback

      on y retrouve :
      - clearTimeout
      - désabonnement à des services (chat…)
    */
    console.log('Unmount!');
    document.title = 'RIP'; // exemple
  }

  // handleClick
  switchMode = () => {
    console.log(this);

    /*
      je veux modifier mon `state`
    */
    // je récupère la valeur actuelle de mon état
    const { isDark, count } = this.state;

    // comme dans les Functions components,
    // on ne modifie pa directement le state
    // → on passe par la méthode `this.setState()`
    this.setState({
      isDark: !isDark,
      count: count + 1,
    });
  };

  render() {
    // on préfère le destructuring de `this.state`
    const { isDark, count } = this.state;
    // const { isDark, likes } = this.state;

    return (
      <div className={isDark ? 'App darkMode' : 'App'}>
        <header>
          <h1>{isDark ? "O'night" : "O'day"}</h1>

          <img src={isDark ? logoGreen : logoGray} alt="O'clock" />
        </header>

        <main>
          {count < 5 && <Button isDark={isDark} switchMode={this.switchMode} />}
        </main>
      </div>
    );
  }
}

export default App;
