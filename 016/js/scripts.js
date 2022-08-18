// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

console.log(frase.toLocaleLowerCase());

console.log(frase.toLocaleUpperCase());

//trim

var nome = "       Matheus       ";

console.log(nome);

var nomeTrim = nome.trim();

console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste, desta frase de teste.";

console.log(fraseDois.lastIndexOf("teste"));
