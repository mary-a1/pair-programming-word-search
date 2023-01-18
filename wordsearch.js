const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let element of horizontalJoin) {
    if (element.includes(word))
      return true;
  }
  for (let j = 0; j < letters.length; j++) {
    const verticalArray = [];
    for (let i = 0; i < letters.length; i++) {
      if (letters[i][j]) {
        verticalArray.push(letters[i][j]);
      }
    }
    const lettersVertical = verticalArray.join('');
    if (lettersVertical.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;