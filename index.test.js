const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
} = require("./index.js");

let posts;
beforeEach(() => {
  posts = [
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
});

describe("Test su createSlug", () => {
  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("STRINGA")).toBe("stringa");
  });

  test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("esempio di test")).toBe("esempio-di-test");
  });
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow();
  });
});

describe("Test su findPostById", () => {
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
});

describe("Altri Test", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Elio Spena")).toBe("E.S.");
    expect(getInitials("Massimo Decimo Meridio")).toBe("M.D.M.");
  });

  test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([5, 2, 4, 1])).toBe(3);
  });

  test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("Anna")).toBeTruthy();
  });
});

describe("Test su manipolazione array posts", () => {
  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più", () => {
    addPost(posts, {
      id: 4,
      title: "Viaggio a Londra",
      slug: createSlug("Viaggio a Londra"),
    });
    expect(posts).toHaveLength(4);
  });

  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno", () => {
    removePost(posts, 1);
    expect(posts).toHaveLength(2);
  });

  test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore", () => {
    expect(() => {
      addPost(posts, {
        id: 5,
        title: "Viaggio a Roma",
        slug: createSlug("Viaggio a Parigi"),
      });
    }).toThrow("Slug già presente!");

    expect(() => {
      addPost(posts, {
        id: 1,
        title: "Viaggio a Roma",
        slug: createSlug("Viaggio a Roma"),
      });
    }).toThrow("Id già presente!");
  });
});
