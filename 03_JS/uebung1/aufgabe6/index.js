/**
 * Aufgabe 6
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird, soll der Wert des Input-Feldes ausgelesen werden
 * und die Farbe des <h1> auf den Wert gesetzt werden.
 */

// const hobbies = ["Volleyball", "Videographie", "Theater", "JS Programmieren"];
// console.log(hobbies.length);

// for (let i = 0; i < hobbies.length; i++) {
//   console.log(hobbies[i]);
// }

const greet = (name, value) => {
  // wird ausgeführt.
  const message = `${name} ist ${value}`;
  console.log(message);

  checkAge();
};

const checkAge = () => {
  console.log("checked age");
};

const myName = "Simeo Betschart";

greet("Remo", "määäh");
greet("Stephanie", "genial");
greet("Simeo");
