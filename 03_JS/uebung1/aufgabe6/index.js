/**
 * Aufgabe 6
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird, soll der Wert des Input-Feldes ausgelesen werden
 * und die Farbe des <h1> auf den Wert gesetzt werden.
 */

// 1. button in einer Variable speichern
const button = document.querySelector("#change-color");
const h1Elem = document.querySelector("h1");
const inputElement = document.querySelector("#background-input");

// 2. Event Listener auf Button hinzufügen
button?.addEventListener("click", () => {
  // 3. wenn geklickt, holen wir den Wert des Input Feldes
  const currentValue = inputElement.value;
  // console.dir(currentValue);
  // 4. h1 Farbe soll auf diesen Wert gesetzt werden.
  h1Elem.style.color = currentValue;
});
