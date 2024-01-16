/**
 * Return a random element from an array
 * @param array - an array
 * @returns  A random of element of the array
 *  */

function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default getRandomElement;