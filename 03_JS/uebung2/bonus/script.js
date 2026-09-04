/**
 * Bonus: Kino-Kasse
 *
 * Nutzen Sie if / else if, switch und for-Schleifen.
 * Objekte brauchen Sie nicht – arbeiten Sie mit den beiden Arrays.
 *
 * 1. Erstellen Sie eine Funktion ticketPrice mit einem Parameter age.
 *    Bestimmen Sie den Grundpreis mit if / else if / else:
 *    - unter 12 Jahren: 8
 *    - unter 18 Jahren: 12
 *    - 65 Jahre oder älter: 10
 *    - alle anderen: 16
 *    Die Funktion soll den Preis (als Zahl) zurückgeben.
 *
 * 2. Erstellen Sie eine Funktion weekendBonus mit einem Parameter day.
 *    day ist eine Zahl von 1 (Montag) bis 7 (Sonntag).
 *    Nutzen Sie ein switch-Statement:
 *    - Bei 6 oder 7 (Wochenende) soll 3 zurückgegeben werden.
 *    - Bei allen anderen Tagen 0.
 *
 * 3. Wenn der Button "Preise berechnen" geklickt wird:
 *    - Lesen Sie den gewählten Wochentag aus #wochentag.
 *    - Leeren Sie zuerst die Liste #tickets (innerHTML = "").
 *    - Iterieren Sie mit einer for-Schleife durch das Array ageList.
 *    - Für jedes Alter: Grundpreis + Zuschlag berechnen.
 *    - Erstellen Sie ein <li> mit dem Text
 *      "Gast, Alter <alter>: <preis> CHF"
 *      und fügen Sie es der Liste #tickets an.
 */

const ageList = [10, 17, 34, 70, 12, 8, 42];
