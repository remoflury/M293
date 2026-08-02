/**
 * AUFGABE 1 – Kursanmeldung
 *
 * Ein Formular darf die Seite nicht neu laden.
 * Stattdessen prüfen Sie die Eingaben und geben Feedback.
 *
 * 1. Hören Sie auf das "submit"-Event des Formulars (#registration-form).
 * 2. Verhindern Sie das Standardverhalten. Recherchieren Sie falls nötig.
 * 3. Lesen Sie Name, E-Mail und Checkbox aus.
 * 4. Validierung:
 *    - Name und E-Mail dürfen nicht leer sein
 *    - Die Checkbox muss aktiviert sein
 * 5. Bei Fehlern:
 *    - Setzen Sie die Klasse "error" auf die betroffenen Inputs (classList)
 *    - Zeigen Sie im #feedback eine passende Fehlermeldung
 * 6. Bei Erfolg:
 *    - Entfernen Sie "error"-Klassen
 *    - Zeigen Sie eine Erfolgsmeldung mit Klasse "success"
 *    - Entfernen Sie die Klasse "hidden" am Feedback-Element
 *
 * Tipp: classList.add(), classList.remove(), classList.toggle()
 */
