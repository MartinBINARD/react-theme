console.log('`this` en JS');

class User {
  get() {
    console.log(5, this);

    // fonction déclarée (_Declaration Function_)
    function skills() {
      console.log(8, this);
    }
    // fonction exprimée (_Expression Function_)
    const age = function () {
      console.log(13, this);
    };

    // fonction fléchée (_Arrow Function_)
    const address = () => {
      console.log(18, this);
    };

    skills();
    age();
    address();
  }
}

const daveLopper = new User();
daveLopper.get();

/*
  Dans une fonction déclarée ou exprimée,
  le contexte de `this` est déterminé par
  la façon dont la fonction est appelée
  et non par l'endroit où elle est définie.

  Ici :

  - `get()` est appelée dans le contexte de `daveLopper`
  qui est une instance de `User` (`daveLopper.get()`)
    → `this` sera égal à `User {}`

  - `skills` est appelée sans contexte (`skills()`)
    → `this` sera égal à `undefined`

  Par contre, une fonction fléchée NE MODIFIE PAS LE CONTEXTE
*/
