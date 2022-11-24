const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function map(array, callback) {
  const newArr = [];
  for (const element of array) {
    newArr.push(callback(element));
  }
  return newArr;
}

const titleCased = map(tutorials, function(object) {
  return object.toLowerCase().split(` `).map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(` `);
});