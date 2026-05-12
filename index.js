function getInitials(user) {
  return user
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + ".")
    .join("");
}

function createSlug(string) {
  if (string === "" || !isNaN(string)) {
    throw new Error("Inserire un titolo valido!");
  }
  return string.toLowerCase().replaceAll(" ", "-");
}

function average(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

function isPalindrome(string) {
  return (
    string.toLowerCase() === string.split("").reverse().join("").toLowerCase()
  );
}

function findPostById(arr, id) {
  if (id > arr.length || id < 1) {
    throw new Error("Inserire un numero valido!");
  }
  return arr.find((p) => p.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
