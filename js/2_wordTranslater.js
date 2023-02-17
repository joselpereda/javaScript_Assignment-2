//Prompt user for language code
let languageCode = prompt("Enter two-letter language code (es, de, en or fr): ").toLowerCase();

//Check code entered and display "hello world" in corresponding message
if (languageCode === "es") {
    document.write("Hola Mundo!");
} else if (languageCode === "de") {
    document.write("hallo Welt!");
} else if (languageCode === "en") {
    document.write("Hello World!");
} else if (languageCode === "fr" ) {
    document.write("Bonjour le monde!");
} else {
    document.write("Hello World!");
}