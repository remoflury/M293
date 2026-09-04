/**
 * Aufgabe 4
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird soll der Hintergrund des <body> rot werden.
 */

// 1. Button in einer Variable speichern
const button = document.querySelector("button");
console.log(button);
// 2. Event Listener zu diesem Button hinzufügen
button?.addEventListener("click", () => {
  // 3. Hintergrundfarbe ändern
  document.body.style.backgroundColor = "red";
});

const myAge = 1312;
