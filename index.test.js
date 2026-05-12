const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./index.js");

const posts = [
  {
    id: 1,
    title: "Viaggio a Parigi",
    slug: createSlug("Viaggio a Parigi"),
  },
  {
    id: 2,
    title: "Ricetta Pizza",
    slug: createSlug("Ricetta Pizza"),
  },
  {
    id: 3,
    title: "Routine Mattutina",
    slug: createSlug("Routine Mattutina"),
  },
];

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Elio Spena")).toBe("E.S.");
  expect(getInitials("Massimo Decimo Meridio")).toBe("M.D.M.");
});

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("STRINGA")).toBe("stringa");
});

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
  expect(average([5, 2, 4, 1])).toBe(3);
});

test("La funzione createSlug sostituisce gli spazi con -", () => {
  expect(createSlug("esempio di test")).toBe("esempio-di-test");
});

test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
  expect(isPalindrome("Anna")).toBeTruthy();
});

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlug("")).toThrow();
});

test("La funzione findPostById restituisce il post corretto dato array di post e id", () => {
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Ricetta Pizza",
    slug: createSlug("Ricetta Pizza"),
  });
});

test("La funzione findPostById lancia un errore se l'id non è corretto", () => {
  expect(() => findPostById(posts, 999)).toThrow();
});
