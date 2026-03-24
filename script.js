//Kata Azteca Maya Solución//

/*      
        1: Construye las siguientes clases:

    Warrior:

constructor(life, power): Establece el valor de las propiedades life y power

attack: Devuelve el valor de power del guerrero

defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

    Maya: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

drinkColaCao: Suma 10 al poder.

    Aztec: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

drinkNesquik: Suma 10 a la vida.
 */

class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack() {
    return this.power;
  }
  defend(damage) {
    return (this.life -= damage);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkColaCao() {
    this.power += 10;
    console.log(
      `Maya bebe ColaCao... se siente mas fuerte que nunca, su poder ahora es de ${this.power}`,
    );
  }
}

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkNesquik() {
    this.life += 10;
    console.log(
      `Azteca bebe Nesquik... se siente mas vivo que nunca, su vida ahora es de ${this.life}`,
    );
  }
}

let alex = new Maya(50, 20);
let guillermo = new Aztec(50, 20);

/*  2: Realiza la siguiente cadena de intercambio de golpes.

Azteca bebe nesquik

Maya bebe Cola Cao

Maya ataca a azteca. Azteca defiende.

Azteca ataca a maya. Maya defiende. */

console.log(
  "Dos guerreros legendarios conocidos como Alex y Guillermo se enfrentan para demostrar si es mejor el ColaCao o el Nesquik...\n",
);

guillermo.drinkNesquik();

console.log("");

alex.drinkColaCao();

console.log("");

console.log(
  `Alex el Maya ataca a Guillermo el Azteca por ${alex.attack()} de daño.\nGuillermo defiende... le quedan ${guillermo.defend(alex.attack())} puntos de vida.\n`,
);

console.log(
  `Guillermo el Azteca contraataca a Alex el Maya por ${guillermo.attack()} de daño.\nAlex defiende... le quedan ${alex.defend(guillermo.attack())} puntos de vida.\n`,
);

console.log(
  "Alex y Guillermo se dieron cuenta que luchar era inútil, ambos viales chocolatados eran sabrosos por igual...\nSe dieron la mano y decidieron disfrutar ambos brebajes bajo la luz de la luna.\nHasta que descubran el Cacaolat...",
);
