const { getInitials } = require("./index.js");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Elio Spena")).toBe("E.S.");
  expect(getInitials("Massimo Decimo Meridio")).toBe("M.D.M.");
});
