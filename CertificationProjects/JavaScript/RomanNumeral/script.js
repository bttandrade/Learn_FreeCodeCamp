const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  if (input.value == '') {
    output.innerText = "Please enter a valid number";
  } else if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (input.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else {
    output.innerText = convertRoman(input.value);
  }
});

function reducer(a, b, letter) {
  let obj = {
    array: [],
    value: 0
  }
  while (a >= b) {
    a -= b;
    obj.array.push(letter);
  }
  obj.value = a;
  return obj;
}

let map = {
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
}

function convertRoman(value) {
  let final = '';
  let obj = reducer(value, 1000, 'M');
  final += obj.array.join('');

  for (let i = 0; i < Object.keys(map).length; i++) {
    obj = reducer(obj.value, map[Object.keys(map)[i]], Object.keys(map)[i]);
    final += obj.array.join('');
  }
  return final;
}

