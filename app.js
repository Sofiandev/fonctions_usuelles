// methodes sur les tableaux

const notes = [12, 17, 18, 9, 7];
console.log(notes[0]);

// commence par la fin
console.log(notes.at(-1));

// filtrer les resultats
const goodNotes = notes.filter((note) => note >= 10);
console.log(goodNotes);

// find permet de tourver le premier element de la condition
// existe avec last

//foreach parcourir un tableau

notes.forEach((note, index) => {
  console.log(note, index);
});

// creer un tableau avec un string : array.from()

// savoir si une valeur est inclut dans le tableau avec includes

// join : joindre les éléments avec un caractères de liaison

// map : permet de transformer un tableau

const persons = [
  { firstname: "sofian", lastname: "achbabi" },
  { firstname: "charline", lastname: "galthie" },
  { firstname: "bruce", lastname: "wayne" },
  { firstname: "Thomas", lastname: "wayne" },
];

const per = persons.map((p) => `${p.firstname} ${p.lastname}`);
console.log(per.join("\n"));

//pop permet de retirer un élément d'un tableau => modifie le tableau original
// push ajoute un élément au tableau
// reduce quand on veut récupérer une seul valeur de sortie d'un tableau

// shift retire le premier élement d'un tableau

// slice récupérer une partie d'un tableau

console.log(notes.slice(2, 4));

// inverser un tableau dans un nouveau tableau

notes.slice().reverse();

// unshift ajoute element au début du tableau

// methodes sur les objets

// object.entries pour récupérer clé valeur
// object.freeze
// object.keys avoir un tableau de toutes les clés
// object.values comme pour keys mais pour les valeurs

// méthodes sur les fonctions

// apply

function hello() {
  console.log(this);
}

// methode bind ne permet pas de remodifier la valeur de this
const hello2 = hello.bind(3);
