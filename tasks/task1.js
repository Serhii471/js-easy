// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 
                  'A', 'E', 'I', 'O', 'U', 'Y'];

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      result += '*';
    } else {
      result += char;
    }
  }

  return result;
}
console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;