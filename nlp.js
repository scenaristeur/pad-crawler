// https://blog.logrocket.com/natural-language-processing-for-node-js/
var natural = require('natural');
var tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));


// natural.PorterStemmer.attach();
// console.log("I can see that we are going to be friends".tokenizeAndStem());


var classifier = new natural.BayesClassifier();
classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the q\'s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');
classifier.train();

console.log(classifier.classify('i am short silver'));
console.log(classifier.classify('i am long copper'));
