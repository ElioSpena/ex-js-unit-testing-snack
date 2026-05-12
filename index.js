function getInitials(user) {
  return user
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + ".")
    .join("");
}

module.exports = { getInitials };
