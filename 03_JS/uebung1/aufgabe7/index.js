/**
 * Aufgabe 7
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird, soll der Wert des Input-Feldes ausgelesen werden
 * und ein Alert erscheinen, wo "Hallo <Wert des Input Feldes>" steht.
 */

//1. Button in einer Variable speichern
const button = document.querySelector("#submit-button");
const inputElem = document.querySelector("#name");
// 2. event listener zum Button hinzufügen
button?.addEventListener("click", () => {
  // 3. Wenn geklickt, dann soll der Wert des Input Feldes ausgelesen werden
  console.log(inputElem.value);
  // 4. Alert mit Text

  window.alert("Hallo " + inputElem.value);
  // window.alert(`Hallo ${inputElem.value}`);
});
