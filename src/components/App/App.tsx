import React from 'react';

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
    };

    // On va créer une méthode pour appeler `switchMode`
    // tout en transportant /lui donnant la classe comme contexte
    // > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    // this.switchMode = this.switchMode.bind(this);
  }

  // handleClick
  switchMode = () => {
    console.log(this);

    /*
      je veux modifier mon `state`
    */
    // je récupère la valeur actuelle de mon état
    const { isDark } = this.state;

    // comme dans les Functions components,
    // on ne modifie pa directement le state
    // → on passe par la méthode `this.setState()`
    this.setState({
      isDark: !isDark,
    });
  };

  componentDidMount() {
    /*
      Cette méthode est AUTOMATIQUEMENT appelée lors du 1er rendu
      */
    console.log('Mounted !');
    document.title = 'Welcome !';
  }

  // Je cible le montage de mon composant
  // pour effectuer des tâches
  // - DOM réel
  // - Appel API
  // - setTimeout
  // - abonnement à des services (chat...)

  render() {
    // on préfère le destructuring de `this.state`
    const { isDark } = this.state;
    // const { isDark, likes } = this.state;

    return (
      <div className={isDark ? 'App darkMode' : 'App'}>
        <header>
          <h1>{isDark ? "O'night" : "O'day"}</h1>

          <img src={isDark ? logoGreen : logoGray} alt="O'clock" />
        </header>

        <main>
          <button type="button" onClick={this.switchMode}>
            Switch to {isDark ? 'light' : 'dark'} mode
          </button>
        </main>
      </div>
    );
  }
}

export default App;
