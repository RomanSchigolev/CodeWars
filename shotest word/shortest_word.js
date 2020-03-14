function findShort(str) {
  let massiveWords = str.split(" ");
  let massLength = massiveWords.map(word => {
    return word.length;
  });
  return (Math.min(...massLength));
}

let str = "bitcoin take over the world maybe who knows perhaps";
findShort(str);
