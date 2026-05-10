const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const result = [];
  for (let i = 0; i < expr.length; i += 10) {
    const chunk = expr.slice(i, i + 10);
    if (chunk === '**********') {
      result.push(' ');
    } else {
      const withoutZeros = chunk.replace(/^0+/, '');
      if (withoutZeros !== '') {
        const morseCode = withoutZeros.replace(/10/g, '.').replace(/11/g, '-');
        const decoded = MORSE_TABLE[morseCode];
        result.push(decoded !== undefined ? decoded : morseCode);
      }
    }
  }

  return result.join('');
};
